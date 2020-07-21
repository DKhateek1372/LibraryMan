import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import hackerNewsReducer from './home/reducer';
import hackerNewsSearchReducer from './search/reducer';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    hackerNews: hackerNewsReducer,
    hackerNewsSearch : hackerNewsSearchReducer
})