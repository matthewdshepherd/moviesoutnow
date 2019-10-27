export const getFavorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORTIEs':
      return action.favorites
    default:
      return state
  }
}