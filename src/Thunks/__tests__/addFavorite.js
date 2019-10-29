import { addFavorite } from '../addFavorite';
import { fetchFavorites } from '../fetchFavorites';
import { isLoading, hasErrored, setFavorites } from '../../Actions';

describe('addFavorite', () => {
  let mockDispatch
  let mockEvent
  let mockMovie
  let mockUserId

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn()
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
  })
})