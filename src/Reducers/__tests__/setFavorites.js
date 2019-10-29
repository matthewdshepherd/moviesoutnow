import { setFavorites, favorites } from '../setFavorites';

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an array of favorites', () => {
    const mockAction = {
      type: 'SET_FAVORITES',
      favorites: [{title: 'movie1'}, {title: 'movie2'}]
    }
    const expected = mockAction.favorites;
    const result = favorites([], mockAction);
    expect(result).toEqual(expected);
  });
  
});