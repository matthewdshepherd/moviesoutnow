import { isLoading, hasErrored, setFavorites } from '../Actions'

export const fetchFavorites = (id) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const favoritesResponse = await response.json() 
      dispatch(isLoading(false));
      dispatch(setFavorites(favoritesResponse.favorites));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}