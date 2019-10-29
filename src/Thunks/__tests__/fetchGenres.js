import { fetchGenres } from '../fetchGenres';
import { isLoading, hasErrored, setGenres } from '../../Actions';

describe('fetchGenres', () => {
  let mockGenres
  let mockDispatch

  beforeEach(() => {
    mockGenres = [{
      id: 30,
      name: 'Action'
    },
    {
      id: 44,
      name: 'Comedy'
    },
    {
      id: 32,
      name: 'Horror'
    }]
  });
  mockDispatch = jest.fn()
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      results: mockGenres
    })
  }));

  it('should call dispatch with isLoading(true)', () => {
    const thunk = fetchGenres();
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  })
})
