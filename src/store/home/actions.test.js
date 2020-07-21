import actions from './actions';

describe('actions', () => {
  it('should dispatch an action to fetch the home Data', (payload) => {
    const expectedAction = {
      type: 'FETCH_DATA_REQUEST',
      payload,
    };
    expect(actions.setTheme(payload)).toEqual(expectedAction);
  });

  it('should dispatch an action to update the vote count', (payload) => {
   const expectedAction = {
      type: 'UPDATE_VOTE_COUNT_REQUEST',
      payload,
    };
    expect(actions.setLayout(payload)).toEqual(expectedAction);
  });
});