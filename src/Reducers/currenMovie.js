export const currentMovie = (state = 0, action) => {
    switch(action.type) {
        case 'SET_CURRENT_MOVIE':
            return action.currentMovieId
        default:
            return state
    }
}