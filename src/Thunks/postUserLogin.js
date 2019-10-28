import { isLoading, hasErrored, currentUser } from '../Actions'
import { fetchFavorites } from './fetchFavorites';

export const postUserLogin = (loginCredentials) => {
  return async (dispatch) => {
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
      dispatch(fetchFavorites(currentUserResponse.id))
      await dispatch(currentUser(currentUserResponse));
      dispatch(hasErrored('', { type: 'CLEAR_ERROR'}))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}