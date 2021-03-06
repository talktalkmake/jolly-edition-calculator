import formatOptions from './formatOptions'

export const newHighestId = state =>
  state.length === 0
    ? 0
    : [...state.map(item => item.id)].pop() + 1

const newItem = {
  name: '',
  format: 'A7',
  fold: false,
  envelope: false,
  addressPrint: false,
  letterpress: false,
  thickness: 1,
  edgePainting: false,
  foil: false,
  quantity: 100
}

function reducer(state, action) {
  switch (action.type) {
    case 'addItem':
      return [...state, { id: newHighestId(state), ...newItem }];
    case 'removeItem':
      return [...state.filter(item => item.id === action.id ? false : item)];
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