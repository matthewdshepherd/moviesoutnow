import { isLoading, hasErrored, setRecentMovies } from '../Actions';



export const fetchRecentMovies = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const movies = await response.json();
      dispatch(isLoading(false));
      dispatch(setRecentMovies(movies));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}