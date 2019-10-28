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

export const currentUser = currentUser => ({
  type: 'CURRENT_USER',
  currentUser
})

export const toggleModal = toggleState => ({
  type: 'TOGGLE_MODAL',
  toggleState
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORTIES',
  favorites
})