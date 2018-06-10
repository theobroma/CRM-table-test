import * as React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

import './styles/index.scss';
import MainApp from './containers/MainApp';

const logger = createLogger({
  // Collapse actions that don't have errors
  //need to fix in ts
  //collapsed: (getState, action, logEntry) => !logEntry.error
  collapsed: true
});

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);
