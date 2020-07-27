import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer , createMigrate} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { createRootReducer } from './combineReducers';
import rootSaga from './combineSagas';
const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  version: 1.12,
};

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

// const migrations = {
//   1.35: state => {
//       return {
//           ...state,
//           device: undefined,
//       };
//   },
// };

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1.35,
//   blacklist: ['home'],
//   stateReconciler: autoMergeLevel2,
//   migrate: createMigrate(migrations, { debug: true }) //see merge section for the details
// }; //for persist

const composeEnhancers = composeWithDevTools({});
const persistedReducer = persistReducer(persistConfig,createRootReducer(history));
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export {store, persistor};


