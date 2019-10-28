import { isLoading, hasErrored, setFavorites } from '../Actions'

export const addFavorite = ( userId ,movieInfo) => {
  const { id, title, poster_path, release_date, vote_average, overview } = movieInfo;
  const cleanedInfo = {
    movie_id: id,
    title,
    poster_path,
    release_date,
    vote_average,
    overview
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(cleanedInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/users/${userId}/moviefavorites`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const favoritesResponse = await response.json()
      dispatch(isLoading(false));
      dispatch(setFavorites(favoritesResponse));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}