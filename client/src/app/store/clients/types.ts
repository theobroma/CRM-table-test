import {Action} from 'redux';

export interface ClientsState {
  data: ClientsInfo[];
  pending: boolean;
  error: null;
}

export interface ClientsInfo {
  _id: string;
  name: string;
  discountType: 'gold' | 'silver' | 'wood' | 'standart';
  spentSum: number;
  discountProcent: number;
  gender: 'female' | 'male';
}

export interface ClientsListUpdatedAction extends Action {
  type: '@@clients/FETCH_CLIENTS_REQUEST';
  payload: {
    data: ClientsInfo[];
  };
}

export interface EditRowRequestAction extends Action {
  type: '@@clients/EDIT_ROW_REQUEST';
  payload: {
    data: ClientsInfo[];
  };
}

export type ChatActions = ClientsListUpdatedAction | EditRowRequestAction;
