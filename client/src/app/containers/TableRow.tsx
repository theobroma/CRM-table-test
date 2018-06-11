import { connect } from 'react-redux';
import TableRow from '../components/TableRow';
import {} from '../actions';

// function getActiveFiltersCount(state: any, props: any) {
//   return state.filters.data.filter((filter: any) => {
//     return filter.active;
//   });
// }

const mapStateToProps = (state: any, props: any) => {
  return {
    editing: state.editing
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  // toggleFilter: (filter: string) => dispatch(toggleFilter(filter)),
  // editCell: (id: string, cellType: string, text: string) => {
  //   //console.log(cellType);
  //   return dispatch(editCell(id, cellType, text));
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow);
