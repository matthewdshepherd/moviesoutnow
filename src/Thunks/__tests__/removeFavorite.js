import { removeFavorite } from '../addFavorite';
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

  
});