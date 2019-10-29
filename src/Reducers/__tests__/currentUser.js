import { currentUser } from '../currentUser';

describe('currentUser reducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = currentUser(undefined, {});

    expect(result).toEqual(expected);
  });

});