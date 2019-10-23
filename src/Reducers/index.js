import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { movies } from './movies';


export const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  movies
})



