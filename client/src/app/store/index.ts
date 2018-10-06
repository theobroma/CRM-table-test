import {combineReducers, Dispatch, Reducer} from 'redux';

import clientsReducer from './clients/reducer';
import filtersReducer from './rowEditing/reducer';
import rowEditingReducer from './rowEditing/reducer';

export const rootReducer: any = combineReducers({
  clients: clientsReducer,
  filters: filtersReducer,
  rowEditing: rowEditingReducer,
});
