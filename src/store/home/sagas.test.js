import {  put } from 'redux-saga/effects';
import { libraryManagementAction } from './actions';

it('should fail if not authenticated', () => {
    const gen = libraryManagementAction.handleFetchBookList();
  
    expect(gen.next().value).toEqual((libraryManagementAction.fetchBooksDataSuccess()));
    expect(gen.next(false).value).toEqual(put(libraryManagementAction.fetchBooksDataError()));
    expect(gen.next().done).toBeTruthy();
  });