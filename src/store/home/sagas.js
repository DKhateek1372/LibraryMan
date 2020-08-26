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

function* addBooksBorrowedRequest(requets) {
  const { payload } = requets;
 try {
  yield put(libraryManagementAction.addBooksBorrowedSuccess(payload.data));
  } catch (err) {
    yield put(libraryManagementAction.addBooksBorrowedError(err));
  }
}

function* handleUserBorrowedBooksList() {
   try {
    yield put(libraryManagementAction.userBorrowedBooksListSuccess());
  } catch (err) {
    yield put(libraryManagementAction.userBorrowedBooksListError(err));
  }
}

export function* libraryManagementSagas() {
  yield all([
    yield takeLatest(libraryManagementAction.FETCH_BOOKS_DATA_REQUEST, handleFetchBookList),
    yield takeLatest(libraryManagementAction.FETCH_BOOKS_DETAILS_REQUEST, handlefetchBookDetails),
    yield takeLatest(libraryManagementAction.ADD_BOOKS_BORROWED_REQUEST, addBooksBorrowedRequest),
    yield takeLatest(libraryManagementAction.USER_BORROWED_BOOKS_LIST_REQUEST, handleUserBorrowedBooksList)
  ]);
}