import { postNewUser } from '../postNewUser';
import { isLoading, hasErrored, currentUser } from '../../Actions';

describe('postNewUser', () => {
  let mockLoginCreds
  let mockUserResponse
  let mockDispatch

  beforeEach(() => {
    mockLoginCreds = {
      firstName: 'Chris',
      lastName: 'Chris',
      email: 'chris@me.com',
      password: 'password'
    };
    mockUserResponse = {
      id: 1,
      name: 'Chris',
      email: 'chris@me.com'
    }
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUserResponse)
    }));
  });

  it('should call dispatch with isLoading(true)', () => {
    const thunk = postNewUser(mockLoginCreds);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });
  
  it('should call fetch with correct url and options', () => {
    const mockUrl = 'http://localhost:3001/api/v1/users/'
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify({
        name: 'Chris Chris',
        email: 'chris@me.com',
        password: 'password'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const thunk = postNewUser(mockLoginCreds);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should dispatch with isLoading(false) if response is ok', async () => {
    const thunk = postNewUser(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch currentUser with correct args if response is ok', async () => {
    const thunk = postNewUser(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(currentUser(mockUserResponse));
  });

  it('should dispatch hasErrored if response is ok', async () => {
    const thunk = postNewUser(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(''));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Nope'
    }));
    const thunk = postNewUser(mockLoginCreds);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Nope'));
  });
})