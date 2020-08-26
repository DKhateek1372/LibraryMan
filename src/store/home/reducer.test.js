import libraryManagementReducer from './reducer';
import { libraryManagementAction } from './actions';
import listItemData from '../../../data-for-testing';

const initialState = {
  loading: true,
  hackerNewsData: {},
  hackerNewsGraphData: [],
};

describe('hackerNewsReducer reducer', () => {
 
  it('returns the initial state', () => {
    expect(libraryManagementReducer(undefined, {})).toEqual({
      loading: true,
      libraryData: [],
      bookDetails:[],
      addBooks:[],
      borrowedBooks: [],
      myBooks :[]   
    });
  });

  it('should return the initial state', () => {
    expect(libraryManagementReducer(initialState, { type: libraryManagementAction.FETCH_BOOKS_DATA_REQUEST})).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return the updated data state', () => {
    expect(libraryManagementReducer(initialState,{
        type: libraryManagementAction.FETCH_BOOKS_DATA_SUCCESS,
     })).toEqual({
      loading: false,
      libraryData: listItemData,
    });
  });

  it('handles failure', () => {
    expect(libraryManagementReducer(initialState, { type: libraryManagementAction.FETCH_BOOKS_DATA_ERROR  })).toEqual({
      ...initialState,
      loading: true,
      errors: '',
    });
  });
  
});

