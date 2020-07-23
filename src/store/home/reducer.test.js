import reducer from './reducer';
import { hackerNewsActionTypes } from '../constants';
import listItemData from '../../../data-for-testing';

const initialState = {
  initialState: true,
  hackerNewsData: {},
  hackerNewsGraphData: [],
  hackerNewsUserData: {},
};

console.log(1231231231, reducer);

describe('hackerNewsReducer reducer', () => {
 
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state', () => {
    expect(reducer(initialState, { type: hackerNewsActionTypes.FETCH_DATA_REQUEST })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return the initial state', () => {
    expect(reducer(initialState,{
        type: hackerNewsActionTypes.FETCH_DATA_SUCCESS,
        payload: { hackerNewsData: listItemData}
    })).toEqual({
      loading: initialState.isLoading,
      hackerNewsData:listItemData,
    });
  });

  it('handles login failure', () => {
    expect(reducer(initialState, { type: hackerNewsActionTypes.FETCH_DATA_ERROR  })).toEqual({
      ...initialState,
      dataError:
        'Sorry, it looks like the Username and/or Password you provided does not match our records',
    });
  });
  
});

