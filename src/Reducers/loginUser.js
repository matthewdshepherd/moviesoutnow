export const loginUser = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {email: action.email, password: action.password}
    default:
      return state
  }
}