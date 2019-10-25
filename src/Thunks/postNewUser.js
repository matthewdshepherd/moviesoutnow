import { isLoading, hasErrored, newUser } from '../Actions'

export const postNewUser = (loginCredentials) => {
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
      const response = await fetch(`http://localhost:3001/api/v1/users/`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const newUser = await response.json()
      dispatch(isLoading(false));
      dispatch(newUser(newUser.results));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}