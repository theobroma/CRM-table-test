import axios from 'axios';
import {ActionCreator} from 'redux';
import {FiltersInfo, ToggleFilterAction} from './types';

export const TOGGLE_FILTER = '@@filters/TOGGLE_FILTER';

export const toggleFilter = (filter: any) => {
  return {
    type: TOGGLE_FILTER,
    filter,
  };
};
