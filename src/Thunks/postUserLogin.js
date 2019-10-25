import { isLoading, hasErrored, userLogin } from '../Actions'

export const postUserLogin = (loginCredentials) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(loginCredentials),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/login/`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const currentUser = await response.json()
      dispatch(isLoading(false));
      dispatch(userLogin(currentUser.results));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}