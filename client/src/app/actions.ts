import axios from 'axios';

export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS';
export const FETCH_CLIENTS_FULFILLED = 'FETCH_CLIENTS_FULFILLED';
export const FETCH_CLIENTS_REJECTED = ' FETCH_CLIENTS_REJECTED';

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const EDIT_CELL_REQUEST = 'EDIT_CELL_REQUEST';
export const EDIT_ROW_REQUEST = 'EDIT_ROW_REQUEST';

export const TOGGLE_EDITING = 'TOGGLE_EDITING';

export const toggleFilter = (filter: any) => {
  return {
    type: 'TOGGLE_FILTER',
    filter
  };
};

export const editCell = (id: string, cellType: string, text: string) => {
  //console.log(text);
  return { type: EDIT_CELL_REQUEST, payload: { id, cellType, text } };
};

export const editRow = (data: any) => {
  //console.log(text);
  return { type: EDIT_ROW_REQUEST, data: data };
};

export const toggleRowEditing = (id: any) => {
  return {
    type: 'TOGGLE_EDITING',
    id
  };
};
