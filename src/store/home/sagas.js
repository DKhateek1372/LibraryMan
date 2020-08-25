import { call, all, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/index';

import {
  libraryManagementAction
} from './actions';

function* handleFetchBookList(requets) {
  const { payload } = requets;
  try {
    const response = yield call(api.getBooks, payload);
    yield put(libraryManagementAction.fetchBooksDataSuccess(response.data));
  } catch (error) {
    yield put(libraryManagementAction.fetchBooksDataError(error));
  }
}

function* handlefetchBookDetails(requets) {
  const { payload } = requets;
  try {
    yield put(libraryManagementAction.fetchBookDetailsSuccess(payload));
  } catch (err) {
    yield put(libraryManagementAction.fetchBookDetailsError(err));
  }
}

function* handlefetchEmptyBooksList(requets) {
  const { payload } = requets;
 try {
    yield put(libraryManagementAction.fetchEmptyListSuccess(payload));
  } catch (err) {
    yield put(libraryManagementAction.fetchEmptyListError(err));
  }
}

function* handleUserBorrowedBooksList(requets) {
  const { payload } = requets;
  try {
    yield put(libraryManagementAction.userBorrowedBooksListSuccess(payload));
  } catch (err) {
    yield put(libraryManagementAction.userBorrowedBooksListError(err));
  }
}

export function* libraryManagementSagas() {
  yield all([
    yield takeLatest(libraryManagementAction.FETCH_BOOKS_DATA_REQUEST, handleFetchBookList),
    yield takeLatest(libraryManagementAction.FETCH_BOOKS_DETAILS_REQUEST, handlefetchBookDetails),
    yield takeLatest(libraryManagementAction.FETCH_BOOKS_EMPTYLIST_REQUEST, handlefetchEmptyBooksList),
    yield takeLatest(libraryManagementAction.USER_BORROWED_BOOKS_LIST_REQUEST, handleUserBorrowedBooksList)
  ]);
}