import { hackerNewsSearchActionTypes } from '../constants';
import cloneDeep from 'clone-deep';

const initialState = {
    hackerNewsSearchData: [],
};

const hackerNewsSearchReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);
  switch (action.type) {
    case hackerNewsSearchActionTypes.FETCH_SEARCH_REQUEST: {
      return { ...newState, loading: true };
    }
    case hackerNewsSearchActionTypes.FETCH_SEARCH_SUCCESS: {
      newState.loading = false;
      newState.hackerNewsSearchData = action.payload;
      return newState;
    }   
    case hackerNewsSearchActionTypes.FETCH_SEARCH_ERROR: {
      return { ...newState, loading: true, errors: action.payload };
    }
    default:
      return newState;
  }
};

export default hackerNewsSearchReducer;
