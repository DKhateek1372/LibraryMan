import * as actions from './actions';
import listItemData from '../../../data-for-testing';

console.log('@583453453485345', listItemData);

describe('actions', () => {
  it('should dispatch an action to fetch the home Data', () => {
    const payload = { id : 1}
    const expectedAction = {
      type: 'FETCH_DATA_REQUEST',
      payload:payload,
    };
    expect(actions.fetchBooksDataRequest(payload)).toEqual(expectedAction);
  });

  it('should dispatch an action to update the vote count', () => {
    const payload = {libraryData: listItemData, key: 0 }
   const expectedAction = {
      type: 'UPDATE_VOTE_COUNT_REQUEST',
      payload:payload,
    };
    expect(actions.fetchBookDetailsRequest(payload)).toEqual(expectedAction);
  });
});