import React, { useState, useReducer, useEffect } from "react"
import getId from "../functions/getId"
import reducer from '../reducers/reducer'
import initialState from '../reducers/initialState'
import formatOptions from '../reducers/formatOptions'

const embellishments = {
    foil: {costPerPrint: 3},
    letterpress: {costPerPrint: 3},
    edgePainting: {costPerPrint: 1}, 
    addressPrint: {costPerPrint: 3},
}

const getListOfFormatOptions = (options, b) => {
    return (
        options.map(option => <option key={getId()}>{option}</option>)
    )
}

const getFormatList = (obj) => Object.keys(obj)


function PrintPricing(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const [quantity, setQuantity] = useState(50)
    let total = 0

    const calculateSubtotal = (item, quantity) => {
        let subTotal = 0
        subTotal += formatOptions[item.format].costPerPrint
        if ( item.envelope )
            subTotal += .5
        if ( item.addressPrint )
            subTotal += item.addressPrint === '1-side' ? (embellishments.addressPrint.costPerPrint) : (embellishments.addressPrint.costPerPrint * 2)
        if ( item.hasStamp )
            subTotal += .58
        if ( item.foil )
            subTotal += embellishments.foil.costPerPrint
        if ( item.letterpress )
            subTotal += embellishments.letterpress.costPerPrint
        if ( item.edgePainting )
            subTotal += embellishments.edgePainting.costPerPrint
        if ( item.thickness > 1 )
            subTotal += ((item.thickness * formatOptions[item.format].costPerPrint) - formatOptions[item.format].costPerPrint)
        total += subTotal
        return subTotal
    }

    return(
        <>
        <section className="row">
            <h1 className="text-center text-6xl">Print Pricing</h1>
            <label htmlFor="quantity" className="block">Select the print quantity</label>
            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} id="quantity" />
            <table className="mt-2">
                <tbody>
                {state.map((product, i) => (
                    <tr key={getId()}>
                        <td>{product.name}</td>
                        <td><select defaultValue={product.format} onChange={e => dispatch({type: 'changeFormat', id: i, format: e.target.value})}>{getListOfFormatOptions(getFormatList(formatOptions), product.format)}</select></td>
                        <td>{product.envelope && "✉"}</td>
                        <td>{product.envelope &&
                            <input type="checkbox" defaultChecked={product.hasStamp} onChange={e => dispatch({type: "toggleStamp", id: i})} />
                        }
                        </td>
                        <td>{product.envelope && 
                            <select defaultValue={product.addressPrint} onChange={e => dispatch({type: 'changeAddressPrint', id: i, addressPrint: e.target.value})}>
                                <option>None</option>
                                <option>1-side</option>
                                <option>2-side</option>
                            </select>}</td>
                        <td><input type="checkbox" defaultChecked={product.foil} onChange={() => dispatch({type: 'toggleFoil', id: i})} /></td>
                        <td><input type="checkbox" defaultChecked={product.letterpress} onChange={() => dispatch({type: 'toggleLetterpress', id: i})} /></td>
                        <td><input type="checkbox" defaultChecked={product.edgePainting} onChange={e => dispatch({type: 'toggleEdgePainting', id: i})} /></td>
                        <td>
                            {product.fold &&
                            <select defaultValue={product.thickness} onChange={e => dispatch({type: 'changeThickness', thickness: parseInt(e.target.value), id: i})}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            }
                        </td>
                        <td>${calculateSubtotal(state[i], quantity)}</td>
                    </tr>)
                )}
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
                        <th>Edge-painting</th>
                        <th>Thickness</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Format</th>
                        <th>Envelope</th>
                        <th>Stamp</th>
                        <th>Address Print</th>
                        <th>Foil</th>
                        <th>Letterpress</th>
                        <th>Edge-painting</th>
                        <th>Thickness</th>
                        <th>Total</th>
                    </tr>
                </tfoot>
            </table>
            <h1 className="text-center text-6xl">${(total * quantity).toLocaleString()}</h1>
        </section>
        </>
    )
}

export default PrintPricing