import {Action} from 'redux';

export interface FiltersState {
  data: FiltersInfo[];
}

export interface FiltersInfo {
  name: string;
  active: boolean;
}

export interface ToggleFilterAction extends Action {
  type: '@@filters/TOGGLE_FILTER';
  payload: {
    data: FiltersInfo[];
  };
}

export type FiltersActions = ToggleFilterAction;
