
import { all, call } from 'redux-saga/effects';

import { libraryManagementSagas } from './home/sagas';

export default function* rootSaga() {
  yield all([
    call(libraryManagementSagas),
  ]);
}

