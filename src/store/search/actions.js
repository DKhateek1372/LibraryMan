import { hackerNewsSearchActionTypes } from '../constants';

// export named actions
export const fetchSearchRequest = value => ({ type: hackerNewsSearchActionTypes.FETCH_SEARCH_REQUEST, payload: value });
export const fetchSearchSuccess = data => ({ type: hackerNewsSearchActionTypes.FETCH_SEARCH_SUCCESS, payload: data });
export const fetchSearchError = message => ({ type: hackerNewsSearchActionTypes.FETCH_SEARCH_ERROR, payload: message });