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

  });

  it('should have a type of SET_RECENT_MOVIES', () => {

  });

  it('should have a type of SET_GENRES', () => {

  });

  it('should have a type of CURRENT_USER', () => {

  });

  it('should have a type of TOGGLE_MODAL', () => {

  });

  it('should have a type of SIGN_OUT', () => {

  });

  it('should have a type of SET_FAVORITES', () => {

  });

  it('should have a type of SET_CURRENT_MOVIE', () => {

  });
});