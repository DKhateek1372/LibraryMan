import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import libraryManagementReducer from './home/reducer';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    libraryManagement: libraryManagementReducer,
})