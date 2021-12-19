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

const formatOptions = [
    {
        label: '4-bar',
        x: 3.475,
        y: 4.875,
        canFold: true,
        costPerPrint: 1.5
    },
    {
        label: 'A6',
        x: 4.625,
        y: 6.25,
        canFold: true,
        costPerPrint: 2
    },
    {
        label: 'A7',
        x: 5,
        y: 7,
        canFold: true,
        costPerPrint: 2
    },
    {
        label: '#10',
        x: 4,
        y: 9.25,
        canFold: true,
        costPerPrint: 2
    },
    {
        label: 'Half-/Gate-fold A7',
        x: 10,
        y: 7,
        canFold: false,
        costPerPrint: 4
    },
    {
        label: '11" x 14"',
        x: 11,
        y: 14,
        canFold: false,
        costPerPrint: 20
    },
    {
        label: '18" x 24"',
        x: 18,
        y: 24,
        canFold: false,
        costPerPrint: 75
    }
]

const allProducts = [
    {
        name: 'Save-the-date',
        format: formatOptions.find(format => format.label === 'A6').label,
        fold: formatOptions.find(format => format.label === 'A6').canFold,
        envelope: true,
    },
    {
        name: 'Invite',
        format: formatOptions.find(format => format.label === 'A7').label,
        fold: formatOptions.find(format => format.label === 'A7').canFold,
        envelope: true,
    },
    {
        name: 'Details Card',
        format: formatOptions.find(format => format.label === '4-bar').label,
        fold: formatOptions.find(format => format.label === '4-bar').canFold,
        envelope: false,
    },
    {
        name: 'Reply Card',
        format: formatOptions.find(format => format.label === '4-bar').label,
        fold: formatOptions.find(format => format.label === '4-bar').canFold,
        envelope: true,
    },
    {
        name: 'Map',
        format: formatOptions.find(format => format.label === 'A7').label,
        fold: formatOptions.find(format => format.label === 'A7').canFold,
        envelope: false,
    },
    {
        name: 'Thank You Card',
        format: formatOptions.find(format => format.label === '4-bar').label,
        fold: formatOptions.find(format => format.label === '4-bar').canFold,
        envelope: true,
    },
    {
        name: 'Menu',
        format: formatOptions.find(format => format.label === '#10').label,
        fold: formatOptions.find(format => format.label === '#10').canFold,
        envelope: false,
    },
    {
        name: 'Program',
        format: formatOptions.find(format => format.label === 'Half-/Gate-fold A7').label,
        fold: formatOptions.find(format => format.label === 'Half-/Gate-fold A7').canFold,
        envelope: false,
    },
    {
        name: 'Drinks Menu',
        format: formatOptions.find(format => format.label === '11" x 14"').label,
        fold: formatOptions.find(format => format.label === '11" x 14"').canFold,
        envelope: false,
    },
]

const getListOfFormatOptions = (options, b) => {
    return (
        options.map(option => <option key={getId()}>{option.label}</option>)
    )
}

const calculateSubtotal = (costPerPrint, quantity) => costPerPrint * quantity

export default function PrintPricing(){
    const [options, setOptions] = useState(formatOptions)
    const [products, setProducts] = useState(allProducts)
    const [embellishments, setEmbellishments] = useState(possibleEmbellishments)
    const [quantity, setQuantity] = useState(50)
    const [total, setTotal] = useState(0)

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
                        <td><select defaultValue={product.format}>{getListOfFormatOptions(formatOptions, product.format)}</select></td>
                        <td>{product.envelope && "✉"}</td>
                        <td>{product.envelope && 
                            <select>
                                <option>1-side</option>
                                <option>2-side</option>
                            </select>}</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td>
                            {product.fold &&
                            <select>
                                <option>Single</option>
                                <option>Double</option>
                                <option>Triple</option>
                            </select>
                            }
                        </td>
                        <td><input type="checkbox" /></td>
                        <td>${calculateSubtotal(formatOptions.find(format => format.label === product.format).costPerPrint, quantity)}</td>
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