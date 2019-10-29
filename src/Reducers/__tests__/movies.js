import { movies } from '../movies';

describe('movies reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = movies(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an array of movies', () => {
    const mockAction = {
      type: 'SET_RECENT_MOVIES',
      movies: [{title: 'movie1'}, {title: 'movie2'}]
    }
    const expected = mockAction.movies;
    const result = movies([], mockAction);
    expect(result).toEqual(expected);
  });
  
});