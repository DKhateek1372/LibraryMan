import hackerNewsReducer from './reducer';
import { hackerNewsActionTypes, hackerNewsVoteCountActionTypes } from '../constants';

describe('hackerNewsReducer reducer', () => {
  it('should return the initial state', () => {
    expect(hackerNewsReducer({},{
        type: hackerNewsActionTypes.FETCH_DATA_REQUEST,
    })).toEqual({
      loading: hackerNewsReducer.loading,
      hackerNewsData: hackerNewsReducer.hackerNewsData,
    });
  });

  it('should handle change', () => {
    expect(
        hackerNewsReducer({}, {
        type: hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_REQUEST,
      }),
    ).toEqual({
        loading: hackerNewsReducer.loading,
        hackerNewsData: hackerNewsReducer.hackerNewsData,
    });
  });
});
