import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware  } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
import reducers from './components/App/reducers/reducers';
import logger from 'redux-logger';

const storeInstance = createStore(
    combineReducers(
      {
        ...reducers
      }
    ),
    applyMiddleware(
      // ! Optional, any number of middleware could exist here
      logger
    )
  )

root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
