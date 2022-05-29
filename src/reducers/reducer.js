import formatOptions from './formatOptions'

function reducer(state, action) {

  state = [...state]
  let temp

  switch (action.type) {
    case 'changeFormat':
      temp = {...state[action.id]}
      temp.format = action.format
      // update the fold attrib.
      temp.fold = formatOptions[temp.format].hasFold
      state[action.id] = temp
      return [...state]

    case 'changeAddressPrint':
      temp = {...state[action.id]}
      temp.addressPrint = ( action.addressPrint === 'None' )
        ? false
        : action.addressPrint
      state[action.id] = temp
      return [...state]

    case 'toggleStamp': 
      temp = {...state[action.id]}
      temp.hasStamp = !temp.hasStamp
      state[action.id] = temp
      return [...state]

    case 'toggleFoil':
      temp = {...state[action.id]}
      temp.foil = !temp.foil
      state[action.id] = temp
      return [...state]

    case 'toggleLetterpress':
      temp = {...state[action.id]}
      temp.letterpress = !temp.letterpress
      state[action.id] = temp
      return [...state]

    case 'changeThickness':
      temp = {...state[action.id]}
      temp.thickness = action.thickness
      state[action.id] = temp
      return [...state]

    case 'toggleEdgePainting':
      temp = {...state[action.id]}
      temp.edgePainting = !temp.edgePainting
      state[action.id] = temp
      return [...state]

    case 'toggleEnvelope':
      const includesEnvelope = !state[action.id].envelope
      state[action.id] = {
        ...state[action.id],
        envelope: includesEnvelope,
        hasStamp: includesEnvelope,
        addressPrint: includesEnvelope ? '1-side' : false
      }
      return [...state]

    case 'updateProductName':
      state[action.id] = { ...state[action.id], name: action.name }
      return [...state]

    case 'updateQuantity':
      temp = {...state[action.id]}
      temp.quantity = action.quantity
      state[action.id] = temp
      return [...state]

    default:
      throw new Error();
  }
}
export default reducer