import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Action, AnyAction } from 'redux';
//mock data
import mockClients from './helpers/mockclients';
import { TOGGLE_FILTER, FETCH_CLIENTS_REQUEST, TOGGLE_EDITING, EDIT_ROW_REQUEST } from './actions';

const editingInitialState = {
  clientID: ''
};

function rowEditing(state = editingInitialState, action: any) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        clientID: action.id
      };
    default:
      return state;
  }
}

const filtersInitialState = {
  data: [
    { name: 'gold', active: false },
    { name: 'silver', active: true },
    { name: 'wood', active: true },
    { name: 'standart', active: false }
  ]
};

//filter reducer
function filters(state = filtersInitialState, action: any) {
  if (action.type === TOGGLE_FILTER) {
    return {
      ...state,
      data: state.data.map((filter: any) => {
        if (filter.name === action.filter.toLowerCase()) {
          return { ...filter, active: !filter.active };
        }
        return filter;
      })
    };
  }
  return state;
}

const clientsInitialState = {
  data: mockClients,
  pending: false,
  error: null
};

function clients(state = clientsInitialState, action: any) {
  switch (action.type) {
    case FETCH_CLIENTS_REQUEST:
      return {
        ...state
      };
    case EDIT_ROW_REQUEST:
      return {
        ...state,
        data: state.data.map((client: any) => {
          if (client._id === action.data._id) {
            return { ...action.data };
          }
          return client;
        })
      };
    default:
      return state;
  }
}

export default combineReducers({
  filters,
  clients,
  rowEditing
});
