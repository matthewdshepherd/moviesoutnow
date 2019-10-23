import { combineReducers } from 'redux';
import { isLoading, hasErrored, movies } from './recentMoviesReducer'


export const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  movies
})



