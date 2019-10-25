export const newUser = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return {
        name: action.name, email: action.email, password: action.password
      }
    default:
      return state
    }
}