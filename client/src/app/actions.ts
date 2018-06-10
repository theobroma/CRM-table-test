import axios from 'axios';

export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS';
export const FETCH_CLIENTS_FULFILLED = 'FETCH_CLIENTS_FULFILLED';
export const FETCH_CLIENTS_REJECTED = ' FETCH_CLIENTS_REJECTED';

export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleFilter = (filter: any) => {
  return {
    type: 'TOGGLE_FILTER',
    filter
  };
};
