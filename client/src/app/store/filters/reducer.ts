import {TOGGLE_FILTER} from './actions';

const filtersInitialState = {
  data: [
    {name: 'gold', active: false},
    {name: 'silver', active: true},
    {name: 'wood', active: true},
    {name: 'standart', active: false},
  ],
};

//filter reducer
function filters(state = filtersInitialState, action: any) {
  if (action.type === TOGGLE_FILTER) {
    return {
      ...state,
      data: state.data.map((filter: any) => {
        if (filter.name === action.filter.toLowerCase()) {
          return {...filter, active: !filter.active};
        }
        return filter;
      }),
    };
  }
  return state;
}

export default filters;
