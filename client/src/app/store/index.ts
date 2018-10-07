import {combineReducers, Dispatch, Reducer} from 'redux';

import {ClientsState} from './clients/types';
import {FiltersState} from './filters/types';
import {rowEditingState} from './rowEditing/types';

import clientsReducer from './clients/reducer';
import filtersReducer from './filters/reducer';
import rowEditingReducer from './rowEditing/reducer';

// The top-level state object
export interface ApplicationState {
  clients: ClientsState;
  filters: FiltersState;
  rowEditing: rowEditingState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  clients: clientsReducer,
  filters: filtersReducer,
  rowEditing: rowEditingReducer,
});
