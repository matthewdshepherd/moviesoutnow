import { addFavorite } from '../addFavorite';
import { fetchFavorites } from '../fetchFavorites';
import { isLoading, hasErrored } from '../../Actions';

jest.mock('../fetchFavorites');

describe('addFavorite', () => {
  let mockDispatch
  let mockEvent
  let mockMovie
  let mockUserId

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    mockMovie = {
      id: 2,
      title: 'Good Movie',
      poster_path: '/someimage',
      release_date: 'yesterday',
      vote_average: 33,
      overview: 'Here is a synopsis'
    };
    mockUserId = 3;
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }));
  });

  it('should call dispatch with isLoading(true)', () => {
    const thunk = addFavorite(mockEvent, mockUserId, mockMovie);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with correct url and options', () => {
    const mockOptions = {
      method: 'POST',
      body: '{"movie_id":2,"title":"Good Movie","poster_path":"/someimage","release_date":"yesterday","vote_average":33,"overview":"Here is a synopsis"}',
      headers: { 'Content-Type': 'application/json' }
    }
    const mockUrl = 'http://localhost:3001/api/v1/users/3/moviefavorites'
    const thunk = addFavorite(mockEvent, mockUserId, mockMovie);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should dispatch with isLoading(false) if response is ok', async () => {
    const thunk = addFavorite(mockEvent, mockUserId, mockMovie);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch fetchFavorites with correct args', async () => {
    const thunk = addFavorite(mockEvent, mockUserId, mockMovie);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchFavorites(mockUserId));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Nope'
    }));
    const thunk = addFavorite(mockEvent, mockUserId, mockMovie);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Nope'));
  });
})