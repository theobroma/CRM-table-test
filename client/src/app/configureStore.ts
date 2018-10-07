import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as _ from 'lodash';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadState, saveState} from './helpers/localStorage';
import {rootReducer} from './store';
//mock data
import MOCK_DATA from './helpers/mockclients';

const configureStore = () => {
  const persistedState = loadState();

  let totalInitialState: any = {
    clients: {
      data: MOCK_DATA,
      pending: false,
      error: null,
    },
  };
  // if persistedState is not empty then assign parsed persistedState to initState
  if (persistedState) {
    totalInitialState = persistedState;
  }

  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    totalInitialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.subscribe(
    _.throttle(() => {
      console.log('saved to localStorage');
      saveState(store.getState());
    }, 1000)
  );

  return store;
};

export default configureStore;
