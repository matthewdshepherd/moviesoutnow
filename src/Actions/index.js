export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (msg) => ({
  type: 'HAS_ERRORED',
  msg
})

export const setRecentMovies = (movies) => ({
  type: 'SET_RECENT_MOVIES',
  movies
})

export const setGenres = (genres) => ({
  type: 'SET_GENRES',
  genres
})

export const loginUser = loginCredentials => ({
  type: 'LOGIN_USER',
  loginCredentials
})

export const newUser = loginCredentials => ({
  type: 'NEW_USER',
  loginCredentials
})

export const toggleModal = bool => ({
  type: 'TOGGLE_MODAL',
  toggleState: bool
})