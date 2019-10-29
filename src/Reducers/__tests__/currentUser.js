import { currentUser } from '../currentUser';

describe('currentUser reducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = currentUser(undefined, {});

    expect(result).toEqual(expected);
  });

it('should return a user object', () => {
  const mockAction = {
    type: 'CURRENT_USER',
    currentUser: {
      id: 4,
      name: 'Chris',
      email: 'chris@me.com'
    }
  }
  const expected = mockAction.currentUser;
  const result = currentUser({}, mockAction);
  expect(result).toEqual(expected);
});
  
  it('should sign out a current user', () => {
    const mockAction = {
      type: 'SIGN_OUT'
    }
    const expected = {}
    const result = currentUser({}, mockAction);
    expect(result).toEqual(expected);
  });
});