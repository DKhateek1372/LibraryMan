import { call, all, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/index';

import {  hackerNewsActionTypes , hackerNewsVoteCountActionTypes, hackerNewsDeleteActionTypes } from '../constants';

function* handleFetch(requets) {
    const { payload } = requets;
    try {
        const response = yield call(api.searchStories, payload);  
        const hackerNewsGraphData =[];
        response.data.hits.map((data=>
           hackerNewsGraphData.push({name: data.objectID, uv: data.points, pv: 2400, amt: 2400})
        ))
        const data = {...response.data, hackerNewsGraphData};
        yield put({ type: 'FETCH_DATA_SUCCESS', data });
    } catch (err) {
       yield put({type: 'FETCH_DATA_ERROR', ...err});
    }
}

function* handleUpdateVoteCount(requets) {
    const { payload } = requets;
     console.log('345345345345', 'i am calling 1', payload);
     try {
      yield put({ type: 'UPDATE_VOTE_COUNT_SUCCESS', ...payload});
    } catch (err) {
      yield put({type: 'UPDATE_VOTE_COUNT_ERROR', ...err});
    }
}

function* handleDeleteData(requets) {
  const { payload } = requets;
   console.log('345345345345', 'i am calling 1', payload);
   try {
    yield put({ type: 'HACKER_NEWS_DELETE_DATA_SUCCESS', ...payload});
  } catch (err) {
    yield put({type: 'HACKER_NEWS_DELETE_DATA_ERROR', ...err});
  }
}

export function* hackerNewsData() {     
    yield all([
        yield takeLatest(hackerNewsActionTypes.FETCH_DATA_REQUEST, handleFetch),
        yield takeLatest(hackerNewsVoteCountActionTypes.UPDATE_VOTE_COUNT_REQUEST, handleUpdateVoteCount), 
        yield takeLatest(hackerNewsDeleteActionTypes.HACKER_NEWS_DELETE_DATA_REQUEST, handleDeleteData)
      ]);
}