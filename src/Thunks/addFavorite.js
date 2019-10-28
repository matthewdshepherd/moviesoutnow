import { isLoading, hasErrored, setFavorites } from '../Actions'
import { fetchFavorites } from './fetchFavorites';


export const addFavorite = (event, userId, movieInfo) => {
  event.preventDefault()
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
      dispatch(isLoading(false));
      dispatch(fetchFavorites(userId))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}