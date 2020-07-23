import hackerNewsReducer from './reducer';
import { hackerNewsActionTypes } from '../constants';
import listItemData from '../../../data-for-testing';

const initialState = {
  loading: true,
  hackerNewsData: {},
  hackerNewsGraphData: [],
};

console.log(1231231231, hackerNewsReducer, hackerNewsReducer(undefined, {}));

console.log('here if condition is true', hackerNewsReducer(initialState,{  type: hackerNewsActionTypes.FETCH_DATA_SUCCESS}))

describe('hackerNewsReducer reducer', () => {
 
  it('returns the initial state', () => {
    expect(hackerNewsReducer(undefined, {})).toEqual({
      loading: true,
      hackerNewsData: {},
      hackerNewsGraphData: [],
    });
  });

  it('should return the initial state', () => {
    expect(hackerNewsReducer(initialState, { type: hackerNewsActionTypes.FETCH_DATA_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return the updated data state', () => {
    expect(hackerNewsReducer(initialState,{
        type: hackerNewsActionTypes.FETCH_DATA_SUCCESS,
     })).toEqual({
      loading: false,
      hackerNewsData:listItemData,
      hackerNewsGraphData: listItemData.hackerNewsGraphData
    });
  });

  it('handles failure', () => {
    expect(hackerNewsReducer(initialState, { type: hackerNewsActionTypes.FETCH_DATA_ERROR  })).toEqual({
      ...initialState,
      loading: true,
      errors: '',
    });
  });
  
});

