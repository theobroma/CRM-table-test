import {connect} from 'react-redux';
import TableRow from '../components/TableRow';
import {toggleRowEditing, editRow} from '../store/rowEditing/actions';

function isRowEditing(state: any, props: any) {
  return state.rowEditing.clientID == props.client._id;
}

const mapStateToProps = (state: any, props: any) => {
  return {
    isRowEditing: isRowEditing(state, props),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleRowEditing: (id: string) => dispatch(toggleRowEditing(id)),
  editRow: (data: any) => dispatch(editRow(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow);
