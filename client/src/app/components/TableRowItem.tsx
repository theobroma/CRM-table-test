import * as React from 'react';
import * as cx from 'classnames';
//mock data if needed
import TextInput from './TextInput';

export class TableRowItem extends React.Component<any, any> {
  //current
  state = {
    //editing: this.props.rowEditing
    editing: false
  };

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    //available editing just for needed fields
    if (
      prevState.editing !== nextProps.isRowEditing &&
      (nextProps.cellType == 'spentSum' || nextProps.cellType == 'discountProcent')
    ) {
      return {
        editing: nextProps.isRowEditing
      };
    } else {
      return null;
    }
  }

  handleSave = () => {
    this.props.handleSave();
    this.setState({ editing: false });
  };

  handleChange = (text: any) => {
    // console.log('handleChange from TableRowItem');
    // console.log(this.props.cellType);
    this.props.handleChangeRow(this.props.cellType, text);
    // this.setState({ text: e.target.value });
  };

  render() {
    let element;
    if (this.state.editing) {
      element = (
        <div className="Table-row-item">
          <TextInput
            text={this.props.text}
            onSave={() => this.handleSave()}
            handleChange={(text: any) => this.handleChange(text)}
          />
        </div>
      );
    } else {
      element = <div className="Table-row-item">{this.props.text}</div>;
    }
    //element = <div className="Table-row-item">{this.props.value}</div>;
    return <React.Fragment>{element}</React.Fragment>;
  }
}

export default TableRowItem;
