import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Action, AnyAction} from 'redux';
//mock data
import {
  TOGGLE_FILTER,
  FETCH_CLIENTS_REQUEST,
  TOGGLE_EDITING,
  EDIT_ROW_REQUEST,
} from './actions';

const editingInitialState = {
  clientID: '',
};

function rowEditing(state = editingInitialState, action: any) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        clientID: action.id,
      };
    default:
      return state;
  }
}

export default rowEditing;
