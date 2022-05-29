import React, { useState, useReducer, useEffect } from "react"
import reducer from '../reducers/reducer'
import initialState from '../reducers/initialState'
import formatOptions from '../reducers/formatOptions'
import getListOfFormatOptions from '../functions/getListOfFormatOptions'

const embellishments = {
    foil: { costPerPrint: 3 },
    letterpress: { costPerPrint: 3 },
    edgePainting: { costPerPrint: 1 },
    addressPrint: { costPerPrint: 3 },
}

function PrintPricing() {
    const [state, dispatch] = useReducer(reducer, initialState)
    let total = 0

    const calculateSubtotal = (item, quantity) => {
        let subTotal = 0
        subTotal += formatOptions[item.format].costPerPrint
        if (item.envelope)
            subTotal += .5
        if (item.addressPrint)
            subTotal += item.addressPrint === '1-side' ? (embellishments.addressPrint.costPerPrint) : (embellishments.addressPrint.costPerPrint * 2)
        if (item.hasStamp)
            subTotal += .58
        if (item.foil)
            subTotal += embellishments.foil.costPerPrint
        if (item.letterpress)
            subTotal += embellishments.letterpress.costPerPrint
        if (item.edgePainting)
            subTotal += embellishments.edgePainting.costPerPrint
        if (item.thickness > 1)
            subTotal += ((item.thickness * formatOptions[item.format].costPerPrint) - formatOptions[item.format].costPerPrint)
        total += (subTotal * quantity)
        return subTotal
    }

    return (
        <section className="text-center">
            <p className="mt-8">§</p>
            <h1 className="text-center text-4xl mt-2">Print Pricing</h1>
            <table className="mt-2">
                <tbody>
                    {state.map(({ name, format, envelope, hasStamp, foil, letterpress, edgePainting, thickness, quantity, addressPrint, fold }, i) => (
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
                            <td>${calculateSubtotal(state[i], product.quantity)}</td>
                        </tr>)
                    )}
                </tbody>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Format</th>
                        <th>Envelope</th>
                        <th>Stamp</th>
                        <th>Address<br />Print</th>
                        <th>Foil</th>
                        <th>Letter<br />press</th>
                        <th>Edge<br />painting</th>
                        <th>Thickness</th>
                        <th>Sets</th>
                        <th>Total</th>
                    </tr>
                </thead>
            </table>
            <h1 className="text-center text-4xl mt-2">${total.toLocaleString()}</h1>
        </section>
    )
}

export default PrintPricing