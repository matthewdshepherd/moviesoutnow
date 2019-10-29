import { currentMovie } from '../currentMovie';

describe('currentMovie reducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = currentMovie(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return a movie id', () => {
    const mockAction = {
      type: 'SET_CURRENT_MOVIE',
      currentMovieId: 4575557
    }
    const expected = 4575557;
    const result = currentMovie(null, mockAction);
    expect(result).toEqual(expected);
  });
});