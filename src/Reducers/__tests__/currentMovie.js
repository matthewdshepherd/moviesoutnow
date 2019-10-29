import { currentMovie } from '../currentMovie';

describe('currentMovie reducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = currentMovie(undefined, {});

    expect(result).toEqual(expected);
  });
});