import { toggleModal } from '../toggleModal';

describe('toggleModal reducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = toggleModal(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the opposite of state', () => {
    const mockAction = {
      type: 'TOGGLE_MODAL'
    }
    const expected = true;
    const result = toggleModal(false, mockAction);
    expect(result).toEqual(expected);
  });
  
});