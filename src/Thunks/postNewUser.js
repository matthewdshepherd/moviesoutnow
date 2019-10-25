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
      const newUserResponse = await response.json()
      dispatch(isLoading(false));
      dispatch(newUser(newUserResponse.results));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}