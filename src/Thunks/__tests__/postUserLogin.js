import { postUserLogin } from '../postUserLogin';
import { isLoading, hasErrored, currentUser } from '../../Actions';
import { fetchFavorites } from '../fetchFavorites';

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
})