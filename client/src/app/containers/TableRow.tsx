import { connect } from 'react-redux';
import TableRow from '../components/TableRow';
import { toggleRowEditing } from '../actions';

function isRowEditing(state: any, props: any) {
  return state.rowEditing.clientID == props.client._id;
}

const mapStateToProps = (state: any, props: any) => {
  return {
    isRowEditing: isRowEditing(state, props)
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleRowEditing: (id: string) => dispatch(toggleRowEditing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow);
