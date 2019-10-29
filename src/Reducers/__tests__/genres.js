import { genres } from '../genres';

describe('genres reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = genres(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an array of genres', () => {
    const mockGenres = [{ name: 'Action' }, { name: 'Horror' }]
    const mockAction = {
      type: 'SET_GENRES',
      genres: mockGenres
    };
    const expected = mockGenres;
    const result = genres([], mockAction);

    expect(result).toEqual(expected);
  });
});