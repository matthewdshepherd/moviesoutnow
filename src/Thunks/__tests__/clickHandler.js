import { clickHandler } from '../clickHandler';
import { setCurrentMovie } from '../../Actions';

describe('clickHandler', () => {
  let mockDispatch
  let mockEvent
  beforeEach(() => {
    mockDispatch = jest.fn()
    mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    }
  });

  it('should dispatch setCurrentMovie', () => {
    const thunk = clickHandler(mockEvent, 4575557);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setCurrentMovie(4575557));
  });
})
