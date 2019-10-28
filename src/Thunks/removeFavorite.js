import { isLoading, hasErrored, setFavorites } from '../Actions'

export const removeFavorite = (id, movieId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log(id ,movieId)
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites/${movieId}`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const newFavorites = await response.json()
      console.log(newFavorites)
      dispatch(isLoading(false));
      dispatch(setFavorites(newFavorites));
    } catch (error) {
      console.error(error)
      dispatch(hasErrored(error.message))
    }
  }
}