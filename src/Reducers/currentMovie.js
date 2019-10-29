export const currentMovie = (state = null, action) => {
    switch(action.type) {
        case 'SET_CURRENT_MOVIE':
            return action.currentMovieId
        default:
            return state
    }
}
