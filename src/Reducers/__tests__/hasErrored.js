import { hasErrored } from '../hasErrored';

describe('hasErrored reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = hasErrored(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an error message', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      msg: "You've errored"
    }
    const expected = mockAction.msg;
    const result = hasErrored('', mockAction);
    expect(result).toEqual(expected);
  });
  
});