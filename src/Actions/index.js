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