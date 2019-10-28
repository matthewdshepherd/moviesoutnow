export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORTIES':
      return action.favorites
    default:
      return state
  }
}