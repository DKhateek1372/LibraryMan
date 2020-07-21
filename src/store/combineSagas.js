
import { all, call } from 'redux-saga/effects';

import { hackerNewsData } from './home/sagas';
import { hackerNewsSearchData} from './search/sagas';

export default function* rootSaga() {
  yield all([
    call(hackerNewsData),
    call(hackerNewsSearchData) 
  ]);
}

