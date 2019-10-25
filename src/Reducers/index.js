import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { movies } from './movies';
import { genres } from './genres';
import { loginUser } from './loginUser'
import { newUser } from './newUser'

export const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  movies,
  genres,
  loginUser,
  newUser
})



