import { useState } from "react"
import getId from "../functions/getId"

const possibleEmbellishments = [
    {
        name: 'Foil',
        costPerPrint: 2
    },
    {
        name: 'Letterpress',
        costPerPrint: 2
    },
    {
        name: 'Edge Painting',
        costPerPrint: 1
    },
    {
        name: 'Envelope Address Print',
        costPerPrint: 3
    },
    {
        name: 'Double-sided Envelope Address Print',
        costPerPrint: 6
    },
]

const formatOptions = {
    '4-bar': {
        x: 3.475,
        y: 4.875,
        canFold: true,
        costPerPrint: 1.5
    },
    'A6': {
        x: 4.625,
        y: 6.25,
        canFold: true,
        costPerPrint: 2
    },
    'A7': {
        x: 5,
        y: 7,
        canFold: true,
        costPerPrint: 2
    },
    '#10': {
        x: 4,
        y: 9.25,
        canFold: true,
        costPerPrint: 2
    },
    'Half-/Gate-fold A7': {
        x: 10,
        y: 7,
        canFold: false,
        costPerPrint: 4
    },
    '11" x 14"': {
        x: 11,
        y: 14,
        canFold: false,
        costPerPrint: 20
    },
    '18" x 24"': {
        x: 18,
        y: 24,
        canFold: false,
        costPerPrint: 75
    }
}

const allProducts = [
    {
        name: 'Save-the-date',
        format: 'A6',
        fold: formatOptions['A6'].canFold,
        envelope: true,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Invite',
        format: 'A7',
        fold: formatOptions['A7'].canFold,
        envelope: true,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Details Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].canFold,
        envelope: false,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Reply Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].canFold,
        envelope: true,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Map',
        format: 'A7',
        fold: formatOptions['A7'].canFold,
        envelope: false,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Thank You Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].canFold,
        envelope: true,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Menu',
        format: '#10',
        fold: formatOptions['#10'].canFold,
        envelope: false,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Program',
        format: 'Half-/Gate-fold A7',
        fold: formatOptions['Half-/Gate-fold A7'].canFold,
        envelope: false,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
    {
        name: 'Drinks Menu',
        format: '11" x 14"',
        fold: formatOptions['11" x 14"'].canFold,
        envelope: false,
        addressPrint: false,
        letterpress: false,
        thickness: 'single',
        edgePainting: false
    },
]

const getListOfFormatOptions = (options, b) => {
    return (
        options.map(option => <option key={getId()}>{option}</option>)
    )
}

const getFormatList = (obj) => Object.keys(obj)

const calculateSubtotal = (costPerPrint, quantity) => costPerPrint * quantity

export default function PrintPricing(){
    const [products, setProducts] = useState(allProducts)
    const [quantity, setQuantity] = useState(50)
    const [total, setTotal] = useState(0)

    const updateProduct = (product, key) => {
        // products[product][key]
    }

    return(
        <>
        <section className="row">
            <h1 className="text-center text-6xl">Print Pricing</h1>
            <label htmlFor="quantity" className="block">Select the print quantity</label>
            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} id="quantity" />
            <table className="mt-2">
                <tbody>
                {products.map((product, i) => (
                    <tr key={getId()}>
                        <td>{product.name}</td>
                        <td><select defaultValue={product.format} onChange={() => console.log('change happened')}>{getListOfFormatOptions(getFormatList(formatOptions), product.format)}</select></td>
                        <td>{product.envelope && "✉"}</td>
                        <td>{product.envelope && 
                            <select defaultValue={product.addressPrint} onChange={() => console.log('change happened')}>
                                <option>None</option>
                                <option>1-side</option>
                                <option>2-side</option>
                            </select>}</td>
                        <td><input type="checkbox" onChange={() => console.log('change happened')} /></td>
                        <td><input type="checkbox" onChange={() => console.log('change happened')} /></td>
                        <td>
                            {product.fold &&
                            <select onChange={() => console.log('change happened')}>
                                <option>Single</option>
                                <option>Double</option>
                                <option>Triple</option>
                            </select>
                            }
                        </td>
                        <td><input type="checkbox" onChange={() => console.log('change happened')} /></td>
                        <td>${calculateSubtotal(formatOptions[product.format].costPerPrint, quantity)}</td>
                    </tr>)
                )}
                </tbody>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Format</th>
                        <th>Envelope</th>
                        <th>Address Print</th>
                        <th>Foil</th>
                        <th>Letterpress</th>
                        <th>Thickness</th>
                        <th>Edge-painting</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Format</th>
                        <th>Envelope</th>
                        <th>Address Print</th>
                        <th>Foil</th>
                        <th>Letterpress</th>
                        <th>Thickness</th>
                        <th>Edge-painting</th>
                        <th>Total</th>
                    </tr>
                </tfoot>
            </table>
        </section>
        </>
    )
}