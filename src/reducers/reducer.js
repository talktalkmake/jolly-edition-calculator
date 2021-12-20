function reducer(state, action) {
  
  state = [...state]
  let temp

  switch (action.type) {
    case 'changeFormat':
      temp = {...state[action.id]}
      temp.format = action.format
      state[action.id] = temp
      return state
      
    case 'changeAddressPrint':
      temp = {...state[action.id]}
      temp.addressPrint = ( action.addressPrint === 'None' )
        ? false
        : action.addressPrint
      state[action.id] = temp
      return state
    
    case 'toggleFoil':
      temp = {...state[action.id]}
      temp.foil = !temp.foil
      state[action.id] = temp
      return state
      
    case 'toggleLetterpress':
      temp = {...state[action.id]}
      temp.letterpress = !temp.letterpress
      state[action.id] = temp
      return state

    case 'changeThickness':
      temp = {...state[action.id]}
      temp.thickness = action.thickness
      state[action.id] = temp
      return state
      
    case 'toggleEdgePainting':
      temp = {...state[action.id]}
      temp.edgePainting = !temp.edgePainting
      state[action.id] = temp
      return state

    default:
      throw new Error();
  }
}
export default reducer