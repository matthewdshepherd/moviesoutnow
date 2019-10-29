import { currentUser } from '../currentUser';

describe('currentUser reducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = currentUser(undefined, {});

    expect(result).toEqual(expected);
  });

it('should return a movie id', () => {
  const mockAction = {
    type: 'CURRENT_USER',
    currentUser: {
      id: 4,
      name: 'Chris',
      email: 'chris@me.com'
    }
  }
  const expected = mockAction.currentUser;
  const result = currentUser(null, mockAction);
  expect(result).toEqual(expected);
});
});