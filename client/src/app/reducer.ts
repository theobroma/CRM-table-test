import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Action, AnyAction } from 'redux';
//mock todos reducer with data
import mockClients from './helpers/mockclients';
import { TOGGLE_FILTER, FETCH_CLIENTS_REQUEST, EDIT_CELL_REQUEST } from './actions';

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
    case EDIT_CELL_REQUEST:
      return {
        ...state,
        data: state.data.map((client: any) => {
          if (client._id === action.payload.id) {
            //return { ...client, name: action.payload.text };
            if (action.payload.cellType == 'spentSum') {
              return { ...client, spentSum: action.payload.text };
            }
            if (action.payload.cellType == 'discountProcent') {
              return { ...client, discountProcent: action.payload.text };
            } else {
              return client;
            }
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
  clients
});
