export const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_RECENT_MOVIES':
      return action.movies
    default: 
      return state
  }
}