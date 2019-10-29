import * as actions from '../Actions';

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    };
    const result = actions.isLoading(true);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const expectedAction = {
      type: 'HAS_ERRORED',
      msg: 'Something went wrong'
    };

    const result = actions.hasErrored('Something went wrong');

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_RECENT_MOVIES', () => {
    const movies = [{name: 'movie1'}, {name: 'movie2'}]
    const expectedAction = {
      type: 'SET_RECENT_MOVIES',
      movies: movies
    };

    const result = actions.setRecentMovies(movies);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_GENRES', () => {
    const genres = [{name: 'genre1'}, {name: 'genre2'}]
    const expectedAction = {
      type: 'SET_GENRES',
      genres: genres
    };

    const result = actions.setGenres(genres);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CURRENT_USER', () => {
    const user = {name: 'Chris', id: 4}
    const expectedAction = {
      type: 'CURRENT_USER',
      currentUser: user
    };

    const result = actions.currentUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_MODAL', () => {
    const expectedAction = {
      type: 'TOGGLE_MODAL',
      toggleState: true
    };

    const result = actions.toggleModal(true);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_OUT', () => {
    const expectedAction = {
      type: 'SIGN_OUT',
    };

    const result = actions.signOut();

    expect(result).toEqual(expectedAction);    
  });

  it('should have a type of SET_FAVORITES', () => {

  });

  it('should have a type of SET_CURRENT_MOVIE', () => {

  });
});