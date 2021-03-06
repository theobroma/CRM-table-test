//mock data
import mockClients from '../../helpers/mockclients';
import {FETCH_CLIENTS_REQUEST, EDIT_ROW_REQUEST} from './actions';

const clientsInitialState = {
  data: mockClients,
  pending: false,
  error: null,
};

function clients(state = clientsInitialState, action: any) {
  switch (action.type) {
    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
      };
    case EDIT_ROW_REQUEST:
      return {
        ...state,
        data: state.data.map((client: any) => {
          if (client._id === action.data._id) {
            return {...action.data};
          }
          return client;
        }),
      };
    default:
      return state;
  }
}

export default clients;
