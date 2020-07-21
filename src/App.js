import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CustomRoute from './router/index';
import {store, persistor} from './store/configureStore';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <CustomRoute history={history} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
