import { isLoading, hasErrored, currentUser } from '../Actions'

export const postNewUser = (loginCredentials) => {
  return async (dispatch) => {
    console.log('options')
    const { firstName, lastName, email, password } = loginCredentials
    const formattedUser = {
      name: firstName + " " + lastName,
      email,
      password
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(formattedUser),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/users/`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const newUserResponse = await response.json()
      console.log(newUserResponse)
      dispatch(isLoading(false));
      dispatch(currentUser(newUserResponse.results));
    } catch (error) {
      console.log('here')
      dispatch(hasErrored(error.message))
    }
  }
}