import { isLoading, hasErrored, currentUser } from '../Actions'

export const postUserLogin = (loginCredentials) => {
  return async (dispatch) => {
    console.log(loginCredentials)
    const options = {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/login/`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const currentUserResponse = await response.json()
      dispatch(isLoading(false));
      console.log(currentUserResponse)
      dispatch(currentUser(currentUserResponse));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}