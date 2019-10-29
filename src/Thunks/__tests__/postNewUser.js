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
})