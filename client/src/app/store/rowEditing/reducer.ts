import {TOGGLE_EDITING} from './actions';

const editingInitialState = {
  clientID: '',
};

function rowEditing(state = editingInitialState, action: any) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        clientID: action.id,
      };
    default:
      return state;
  }
}

export default rowEditing;
