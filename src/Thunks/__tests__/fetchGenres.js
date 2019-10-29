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
      genres: mockGenres
    })
  }));

  it('should call dispatch with isLoading(true)', () => {
    const thunk = fetchGenres();
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call the fetch', () => {
    const thunk = fetchGenres();
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should call dispatch with isLoading(false) if response is ok', async () => {
    const thunk = fetchGenres();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch setGenres with correct arguments', async () => {
    const finalGenres = [
      { id: 30, name: 'Action', borderColor: '#F94488' },
      { id: 44, name: 'Comedy', borderColor: '#FDC938' },
      { id: 32, name: 'Horror', borderColor: '#F91D55' }
    ];
    const thunk = fetchGenres();
    await fetchGenres(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setGenres(finalGenres));
  });

  it('should dispatch hasErrored() if response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Try Again'
    }));
    const thunk = fetchGenres();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Try Again'));
  });
})








      