import {
  hackerNewsActionTypes,
  hackerNewsUserActionTypes,
  hackerNewsVoteCountActionTypes,
  hackerNewsDeleteActionTypes
} from '../constants';

const initialState = {
  loading: true,
  hackerNewsData: {},
  hackerNewsGraphData: []
};

const hackerNewsReducer = (state = initialState, action) => {

  // fecth initial data from search //
  console.log('hey yo are getting graph data' ,action,  action.data);
  switch (action.type) {
    case hackerNewsActionTypes.FETCH_DATA_REQUEST: {
      return { ...state, loading: true };
    }
    case hackerNewsActionTypes.FETCH_DATA_SUCCESS: {
      state.loading = false;
      state.hackerNewsData = action.data;
      state.hackerNewsGraphData = action.data.hackerNewsGraphData;
      return state;
    }
    case hackerNewsActionTypes.FETCH_DATA_ERROR: {
      return { ...state, loading: true, errors: '' };
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


    // update vote count //
    case hackerNewsDeleteActionTypes.HACKER_NEWS_DELETE_DATA_REQUEST: {
      return { ...state, loading: true };
    }
    case hackerNewsDeleteActionTypes.HACKER_NEWS_DELETE_DATA_SUCCESS: {
      state.loading = false;
      state.hackerNewsData.hits.splice(action.index,1);
      state.hackerNewsData.hackerNewsGraphData.splice(action.index,1);
      return state;
    }
    case hackerNewsDeleteActionTypes.HACKER_NEWS_DELETE_DATA_ERROR: {
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
