import React, { useState, useReducer, useEffect } from "react"
import reducer from '../reducers/reducer'
import initialState from '../reducers/initialState'
import formatOptions from '../reducers/formatOptions'
import getListOfFormatOptions from '../functions/getListOfFormatOptions'
import calculateSubtotal from '../functions/calculateSubtotal'

function PrintPricing() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [totals] = useState([]);

    // console.log(state)

    return (
        <section className="text-center">
            <p className="mt-8">§</p>
            <h1 className="text-center text-4xl mt-2">Print Pricing</h1>
            <table className="mt-2">
                <tbody>
                    {state.map(({ name, format, envelope, hasStamp, foil, letterpress, edgePainting, thickness, quantity, addressPrint, fold }, i) => {
                        const subTotal = calculateSubtotal(state[i], quantity);
                        totals[i] = subTotal;
                        return (
                            <tr key={i}>
                                <td><input
                                    type="text"
                                    value={name}
                                    className="product-name"
                                    onChange={e => dispatch({ type: "updateProductName", id: i, name: e.target.value })}
                                />
                                </td>
                                <td><select
                                    defaultValue={format}
                                    onChange={e => dispatch({ type: 'changeFormat', id: i, format: e.target.value })}>
                                    {getListOfFormatOptions(Object.keys(formatOptions), format)}
                                </select>
                                </td>
                                <td>
                                    <input type="checkbox" defaultChecked={envelope} onChange={() => dispatch({ type: 'toggleEnvelope', id: i })} />
                                </td>
                                <td>{envelope &&
                                    <input type="checkbox" defaultChecked={hasStamp} onChange={e => dispatch({ type: "toggleStamp", id: i })} />
                                }
                                </td>
                                <td>{envelope &&
                                    <select defaultValue={addressPrint} onChange={e => dispatch({ type: 'changeAddressPrint', id: i, addressPrint: e.target.value })}>
                                        <option>None</option>
                                        <option>1-side</option>
                                        <option>2-side</option>
                                    </select>}</td>
                                <td><input type="checkbox" defaultChecked={foil} onChange={() => dispatch({ type: 'toggleFoil', id: i })} /></td>
                                <td><input type="checkbox" defaultChecked={letterpress} onChange={() => dispatch({ type: 'toggleLetterpress', id: i })} /></td>
                                <td><input type="checkbox" defaultChecked={edgePainting} onChange={e => dispatch({ type: 'toggleEdgePainting', id: i })} /></td>
                                <td>
                                    {!fold &&
                                        <select defaultValue={thickness} onChange={e => dispatch({ type: 'changeThickness', thickness: parseInt(e.target.value), id: i })}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    }
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        onChange={e => dispatch({ type: 'updateQuantity', id: i, quantity: parseInt(e.target.value) })}
                                        defaultValue={quantity}
                                        className="quantity--inline" />
                                </td>
                                <td>${subTotal}</td>
                            </tr>)
                    })
                    }
                </tbody>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Format</th>
                        <th>Envelope</th>
                        <th>Stamp</th>
                        <th>Address Print</th>
                        <th>Foil</th>
                        <th>Letterpress</th>
                        <th>Edge painting</th>
                        <th>Thickness</th>
                        <th>Sets</th>
                        <th>Total</th>
                    </tr>
                </thead>
            </table>
            <h1 className="text-center text-4xl mt-2">${totals.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toLocaleString()}</h1>
            <pre className="text-left">{JSON.stringify(state, null, 2)}</pre>
        </section>
    )
}

export default PrintPricing