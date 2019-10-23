import { isLoading, hasErrored, setGenres } from '../Actions';

export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US')
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const genres = await response.json();
      dispatch(isLoading(false));
      dispatch(setGenres(genres.genres));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}