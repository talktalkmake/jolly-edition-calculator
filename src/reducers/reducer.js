import formatOptions from './formatOptions'

function updateState(state, id) {
  return state.map((item, i) => item.id === id
    ? true
    : false
  );
}

function reducer(state, action) {

  state = [...state]
  let temp

  switch (action.type) {
    case 'changeFormat':
      return [...state.map(item => item.id === action.id
        ? {
          ...state[action.id],
          format: action.format,
          fold: formatOptions[action.format].hasFold
        }
        : item)];

    case 'changeAddressPrint':
      return [...state.map(item => item.id === action.id
        ? { ...state[action.id], addressPrint: action.addressPrint === 'None' ? false : action.addressPrint }
        : item
      )];

    case 'toggleStamp':
      return [...state.map(item => item.id === action.id
        ? { ...state[action.id], hasStamp: !state[action.id].hasStamp }
        : item
      )];

    case 'toggleFoil':
      return [...state.map(item => item.id === action.id
        ? { ...state[action.id], foil: !state[action.id].foil }
        : item)];

    case 'toggleLetterpress':
      return [...state.map(item => item.id === action.id
        ? { ...state[action.id], letterpress: !state[action.id].letterpress }
        : item)];

    case 'changeThickness':
      return [...state.map(item => item.id === action.id ? { ...state[action.id], thickness: action.thickness }
        : item)];

    case 'toggleEdgePainting':
      return [...state.map(item => item.id === action.id
        ? { ...state[action.id], edgePainting: !state[action.id].edgePainting }
        : item)];

    case 'toggleEnvelope':
      const includesEnvelope = !state[action.id].envelope
      return [...state.map(item => item.id === action.id
        ? {
          ...state[action.id],
          envelope: includesEnvelope,
          hasStamp: includesEnvelope,
          addressPrint: includesEnvelope ? '1-side' : false
        }
        : item
      )];

    case 'updateProductName':
      return [...state.map(item => item.id === action.id ? { ...state[action.id], name: action.name } : item)];

    case 'updateQuantity':
      return [...state.map(item => item.id === action.id ? { ...state[action.id], quantity: action.quantity } : item)];

    default:
      throw new Error();
  }
}
export default reducer