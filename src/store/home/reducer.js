import { hackerNewsActionTypes, hackerNewsUserActionTypes, hackerNewsVoteCountActionTypes } from '../constants';

const initialState = {
    loading: true ,
    hackerNewsData: {},
    hackerNewsGraphData:[],
    hackerNewsUserData:{}
};

const hackerNewsReducer = (state = initialState, action) => {  
  // fecth initial data from search //
  switch (action.type) {
    case hackerNewsActionTypes.FETCH_DATA_REQUEST: {
      return { ...state, loading: true };
    }
    case hackerNewsActionTypes.FETCH_DATA_SUCCESS: {
      state.loading = false;
      state.hackerNewsData = action.response.data;
      action.response.data.hits.map((data=>
        state.hackerNewsGraphData.push({name: data.objectID, uv: data.points, pv: 2400, amt: 2400})
      ))
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
      action.hackerNewsData.hits.map((data=>
        state.hackerNewsGraphData.push({name: data.objectID, uv: data.points, pv: 2400, amt: 2400})
      ))
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
