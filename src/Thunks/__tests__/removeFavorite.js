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

  it('should dispatch with isLoading(false) if response is ok', async () => {
    const thunk = removeFavorite(mockUserId, mockMovieId);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch fetchFavorites with correct args', async () => {
    const thunk = removeFavorite(mockUserId, mockMovieId);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchFavorites(mockUserId));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Nope'
    }));
    const thunk = removeFavorite(mockUserId, mockMovieId);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Nope'));
  });
});