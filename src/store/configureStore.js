import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer , createMigrate} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { createRootReducer } from './combineReducers';
import rootSaga from './combineSagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1.12,
// };
const migrations = {
  1.35: state => {
      return {
          ...state,
          device: undefined,
      };
  },
};

const persistConfig = {
  key: 'root',
  storage,
  version: 1.35,
  blacklist: ['view'],
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, { debug: true }),
}; //for persist

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const persistedReducer = persistReducer(persistConfig,createRootReducer(history));
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export {store, persistor};


