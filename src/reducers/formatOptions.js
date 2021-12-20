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

export default formatOptions