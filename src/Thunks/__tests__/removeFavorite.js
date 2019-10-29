import { removeFavorite } from '../removeFavorite';
import { fetchFavorites } from '../fetchFavorites';
import { isLoading, hasErrored } from '../../Actions';

jest.mock('../fetchFavorites');

describe('addFavorite', () => {
  let mockDispatch
  let mockMovieId
  let mockUserId

  beforeEach(() => {
    mockMovieId = 4575557
    mockUserId = 3;
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }));
  });

  it('should call dispatch with isLoading(true)', () => {
    const thunk = removeFavorite(mockUserId, mockMovieId);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with the correct url and options', () => {
    const mockUrl = 'http://localhost:3001/api/v1/users/3/moviefavorites/4575557';
    const mockOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json'
      }
    };
    const thunk = removeFavorite(mockUserId, mockMovieId);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});