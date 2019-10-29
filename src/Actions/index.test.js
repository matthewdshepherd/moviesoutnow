import * as actions from '../Actions';

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    };
    const result = actions.isLoading(true);

    expect(result).toEqual(expectedAction);
  });
});