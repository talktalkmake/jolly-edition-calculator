const formatOptions = {
    '4-bar': {
        x: 3.475,
        y: 4.875,
        hasFold: false,
        costPerPrint: 1.5,
        canBeDuplexed: true,
        canHaveEnvelope: true
    },
    'A2': {
        x: 4.25,
        y: 5.5,
        hasFold: false,
        costPerPrint: 2,
        canBeDuplexed: true,
        canHaveEnvelope: true
    },
    'A6': {
        x: 4.625,
        y: 6.25,
        hasFold: false,
        costPerPrint: 2,
        canBeDuplexed: true,
        canHaveEnvelope: true
    },
    'A7': {
        x: 5,
        y: 7,
        hasFold: false,
        costPerPrint: 2,
        canBeDuplexed: true,
        canHaveEnvelope: true
    },
    '#10': {
        x: 4,
        y: 9.25,
        hasFold: false,
        costPerPrint: 4,
        canBeDuplexed: true,
        canHaveEnvelope: true
    },
    'Half-fold A7': {
        x: 10,
        y: 7,
        hasFold: true,
        costPerPrint: 4,
        canBeDuplexed: false,
        canHaveEnvelope: true
    },
    'Gate-fold A7': {
        x: 10,
        y: 7,
        hasFold: true,
        costPerPrint: 4,
        canBeDuplexed: false,
        canHaveEnvelope: true
    },
    '3-fold A7 cover': {
        x: 15,
        y: 7,
        hasFold: true,
        costPerPrint: 6,
        canBeDuplexed: false,
        canHaveEnvelope: true
    },
    '3-fold A7 cover + 1 mount': {
        x: 15,
        y: 7,
        hasFold: true,
        costPerPrint: 8,
        canBeDuplexed: false,
        canHaveEnvelope: true
    },
    '3-fold A7 cover + 2 mounts': {
        x: 15,
        y: 7,
        hasFold: true,
        costPerPrint: 10,
        canBeDuplexed: false,
        canHaveEnvelope: true
    },
    '3-fold A7 cover + 3 mounts': {
        x: 15,
        y: 7,
        hasFold: true,
        costPerPrint: 12,
        canBeDuplexed: false,
        canHaveEnvelope: true
    },
    '11" x 14"': {
        x: 11,
        y: 14,
        hasFold: false,
        costPerPrint: 20,
        canBeDuplexed: true,
        canHaveEnvelope: false
    },
    '18" x 24"': {
        x: 18,
        y: 24,
        hasFold: false,
        costPerPrint: 75,
        canBeDuplexed: false,
        canHaveEnvelope: false
    }
}

export default formatOptions