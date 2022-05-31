import React, { useState, useReducer, useEffect } from "react"
import reducer from '../reducers/reducer'
import initialState from '../reducers/initialState'
import formatOptions from '../reducers/formatOptions'
import getListOfFormatOptions from '../functions/getListOfFormatOptions'
import calculateSubtotal from '../functions/calculateSubtotal'
import { PlusSmIcon, XCircleIcon } from '@heroicons/react/solid'

function reduceTotal(state) {
    return state.reduce((previousValue, currentValue, i) =>
        previousValue + calculateSubtotal(currentValue, currentValue.quantity), 0)
}

function PrintPricing() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(reduceTotal(state));
    }, [state]);

    return (
        <section className="text-center">
            <p className="mt-8">§</p>
            <table className="mt-2">
                <tbody>
                    {state.map(({ name, format, envelope, hasStamp, foil, letterpress, edgePainting, thickness, quantity, addressPrint, fold, id }, i) => {
                        const subTotal = calculateSubtotal(state[i], quantity);
                        return (
                            <tr key={i}>
                                <td>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => { dispatch({ type: 'removeItem', id }); reduceTotal(state) }}
                                            className="px-2 py-1 bg-transparent hover:bg-red-900 rounded text-red-300 hover:text-white flex items-center m-2">
                                            <XCircleIcon className="h-4 w-4 mr-1" />
                                        </button>
                                        <input
                                            type="text"
                                            value={name}
                                            className="product-name bg-transparent"
                                            onChange={e => dispatch({ type: "updateProductName", id: i, name: e.target.value })}
                                        />
                                    </div>
                                </td>
                                <td><select
                                    defaultValue={format}
                                    className='bg-transparent'
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
                        <th>Sub-total</th>
                    </tr>
                </thead>
            </table>
            <button onClick={() => dispatch({ type: 'addItem' })}
                className="px-2 py-1 bg-green-600 rounded text-white flex items-center m-2">
                <PlusSmIcon className="h-4 w-4 mr-1" /> Add Item</button>
            <h1 className="text-center text-3xl mt-2">${total.toLocaleString()} to print:</h1>
        </section>
    )
}

export default PrintPricing