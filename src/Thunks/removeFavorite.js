import { isLoading, hasErrored, setFavorites } from '../Actions'

export const removeFavorite = (id, movieId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites/${movieId}`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const newFavorites = await response.json()
      dispatch(isLoading(false));
      dispatch(setFavorites(newFavorites));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}