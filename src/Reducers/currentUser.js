export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
        const {id, name, email } = action.currentUser
      return {
        id: id, name: name, email: email
      }
    case 'SIGN_OUT':
      return {}
    default:
      return state
    }
}