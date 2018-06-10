import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Action, AnyAction } from 'redux';
import { Todo, IState } from './model';
//mock todos reducer with data
import mockData from './helpers/mockdata';
import mockClients from './helpers/mockclients';
import {
  SET_FILTER,
  TODOS_AJAX_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_FULFILLED,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FULFILLED,
  ADD_TODO_REQUEST,
  ADD_TODO_FULFILLED,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_FULFILLED,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_FULFILLED,
  TODOS_REMOVE_COMPLETED_REQUEST,
  TODOS_REMOVE_COMPLETED_FULFILLED,
  EDIT_TODO_REQUEST,
  EDIT_TODO_FULFILLED,
  EDIT_TODO_REJECTED,
  TOGGLE_FILTER
} from './actions';

// //filter reducer
// function filter(state = 'SHOW_ALL', action: any) {
//   if (action.type === SET_FILTER) {
//     return action.filter;
//   }
//   return state;
// }

const filtersInitialState = {
  data: [
    { name: 'gold', value: false },
    { name: 'silver', value: true },
    { name: 'wood', value: true },
    { name: 'standart', value: false }
  ]
};

//filter reducer
function filters(state = filtersInitialState, action: any) {
  // if (action.type === TOGGLE_FILTER) {
  //   switch (action.filter) {
  //     case 'GOLD':
  //       return {
  //         ...state,
  //         gold: !state.gold
  //       };
  //     case 'SILVER':
  //       return {
  //         ...state,
  //         silver: !state.silver
  //       };
  //     case 'WOOD':
  //       return {
  //         ...state,
  //         wood: !state.wood
  //       };
  //     case 'STANDART':
  //       return {
  //         ...state,
  //         standart: !state.standart
  //       };
  //     default:
  //       return state;
  //   }
  // }
  return state;
}

//data from file
const DefaultState: any = mockClients;

const clientsInitialState = {
  data: mockClients,
  pending: false,
  error: null
};

function clients(state = clientsInitialState, action: any) {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
}

//epic for testing
// const users = (state = {}, action: any) => {
//   switch (action.type) {
//     case FETCH_USER_FULFILLED:
//       return {
//         ...state,
//         // `login` is the username
//         [action.payload.login]: action.payload
//       };

//     default:
//       return state;
//   }
// };

export default combineReducers({
  filters,
  clients
});
