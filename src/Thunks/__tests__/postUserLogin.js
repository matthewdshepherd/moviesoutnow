import { postUserLogin } from '../postUserLogin';
import { isLoading, hasErrored, currentUser } from '../../Actions';
import { fetchFavorites } from '../fetchFavorites';

jest.mock('../fetchFavorites');

describe('postUserLogin', () => {
  let mockLoginCreds
  let mockDispatch

  beforeEach(() => {
    mockLoginCreds = {
      email: 'chris@me.com',
      password: 'password'
    };
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        id: 2,
        name: 'Chris',
        email: 'chris@me.com'
      })
    }));
  });

  it('should dispatch isLoading(true)', () => {
    const thunk = postUserLogin(mockLoginCreds);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with correct url and options', () => {
    const url = 'http://localhost:3001/api/v1/login/';
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockLoginCreds),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const thunk = postUserLogin(mockLoginCreds);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should dispatch isLoading(false) if response is ok', async () => {
    const thunk = postUserLogin(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch fetchFavorites with correct id if response is ok', async () => {
    const thunk = postUserLogin(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchFavorites(2));
  });

  it('should dispatch currentUser with correct args if response is ok', async () => {
    const expected = {
      id: 2,
      name: 'Chris',
      email: 'chris@me.com'
    };
    const thunk = postUserLogin(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(currentUser(expected));
  })
})