import {
  hackerNewsActionTypes,
  hackerNewsUserActionTypes,
  hackerNewsVoteCountActionTypes,
} from '../constants';

const initialState = {
  loading: true,
  hackerNewsData: {},
  hackerNewsGraphData: [],
  hackerNewsUserData: {},
  activePage: 1,
  dataPerPage: 1,
};

const hackerNewsReducer = (state = initialState, action) => {
 
  // fecth initial data from search //
  switch (action.type) {
    case hackerNewsActionTypes.FETCH_DATA_REQUEST: {
      return { ...state, loading: true };
    }
    case hackerNewsActionTypes.FETCH_DATA_SUCCESS: {
      state.loading = false;
      state.hackerNewsData = action.data;
      state.hackerNewsGraphData = action.data.hackerNewsGraphData;
      console.log('@2642873462467234', state.hackerNewsData, state.hackerNewsGraphData);
      return state;
    }
    case hackerNewsActionTypes.FETCH_DATA_ERROR: {
      return { ...state, loading: true, errors: action };
    }

    // update vote count //
    case hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_REQUEST: {
      return { ...state, loading: true };
    }
    case hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_SUCCESS: {
      state.loading = false;
      state.hackerNewsData = action.hackerNewsData;
      state.hackerNewsGraphData[action.key].uv = action.hackerNewsData.hits[action.key].points;
      return state;
    }
    case hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_ERROR: {
      return { ...state, loading: true, errors: action };
    }

    // fecth user details //
    case hackerNewsUserActionTypes.FETCH_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case hackerNewsUserActionTypes.FETCH_USER_SUCCESS: {
      state.loading = false;
      state.hackerNewsUserData = action;
      return state;
    }
    case hackerNewsUserActionTypes.FETCH_USER_ERROR: {
      return { ...state, loading: true, errors: action };
    }

    default:
      return state;
  }
};

export default hackerNewsReducer;
