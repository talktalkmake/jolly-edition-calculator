import formatOptions from './formatOptions'

const initialState = [
    {
        name: 'Save-the-date',
        format: 'A6',
        fold: formatOptions['A6'].canFold,
        envelope: true,
        hasStamp: true,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Invite',
        format: 'A7',
        fold: formatOptions['A7'].canFold,
        envelope: true,
        hasStamp: true,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Details Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].canFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Reply Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].canFold,
        envelope: true,
        hasStamp: true,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Map',
        format: 'A7',
        fold: formatOptions['A7'].canFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Thank You Card',
        format: '4-bar',
        fold: formatOptions['4-bar'].canFold,
        envelope: true,
        hasStamp: true,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Menu',
        format: '#10',
        fold: formatOptions['#10'].canFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Program',
        format: 'Half-/Gate-fold A7',
        fold: formatOptions['Half-/Gate-fold A7'].canFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
    {
        name: 'Drinks Menu',
        format: '11" x 14"',
        fold: formatOptions['11" x 14"'].canFold,
        envelope: false,
        hasStamp: false,
        addressPrint: false,
        letterpress: false,
        thickness: 1,
        edgePainting: false,
        foil: false
    },
]

export default initialState