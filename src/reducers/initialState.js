import formatOptions from './formatOptions'

const initialState = [
    {
        name: 'Save-the-date',
        format: 'A6',
        fold: formatOptions['A6'].hasFold,
        envelope: true,
        hasStamp: true,
        addressPrint: "1-side",
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Invite',
        format: 'A7',
        fold: formatOptions['A7'].hasFold,
        envelope: true,
        hasStamp: true,
        addressPrint: "1-side",
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Details Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].hasFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Reply Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].hasFold,
        envelope: true,
        hasStamp: true,
        addressPrint: "1-side",
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Map',
        format: 'A7',
        fold: formatOptions['A7'].hasFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Thank You Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].hasFold,
        envelope: true,
        hasStamp: true,
        addressPrint: "1-side",
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Menu',
        format: '#10',
        fold: formatOptions['#10'].hasFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Program',
        format: 'Half-fold A7',
        fold: formatOptions['Half-fold A7'].hasFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 100
    },
    {
        name: 'Drinks Menu',
        format: '11" x 14"',
        fold: formatOptions['11" x 14"'].hasFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false,
        quantity: 1
    },
]

export default initialState