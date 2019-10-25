export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        id: action.id, name: action.name, email: action.email
      }
    default:
      return state
    }
}