import { call, all, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/index';

import {  fetchSearchRequest,  fetchSearchSuccess, fetchSearchError } from './actions';

function* handleFetch() {
    try {
    //   const res = yield call(api.getUserData, type);
    //   const hackerNewsData = res.data.data;
    //   yield put(fetchSearchSuccess(hackerNewsData));
    } catch (err) {
         yield put(fetchSearchError(err.message));
    }
}

function* watchFetchSearchRequest() {
    yield takeLatest(fetchSearchRequest, handleFetch);
}

export function* hackerNewsSearchData() {     
    yield all([ watchFetchSearchRequest() ]);
}