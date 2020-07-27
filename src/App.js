import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Route } from 'react-router-dom';
import hackerNews from './container/hackerNews';
import {store, persistor} from './store/configureStore';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
         <Route exact path="/:id" component={hackerNews}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
