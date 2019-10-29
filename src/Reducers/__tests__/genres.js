import { genres } from '../genres';

describe('genres reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = genres(undefined, {});

    expect(result).toEqual(expected);
  });
})