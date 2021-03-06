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
    this.props.handleChangeRow(this.props.cellType, text);
  };

  render() {
    return this.state.editing ? (
      <div className={cx('Table-row-item', this.props.className)}>
        <TextInput
          text={this.props.text}
          onSave={() => this.handleSave()}
          handleChange={(text: any) => this.handleChange(text)}
        />
      </div>
    ) : (
      <div className={cx('Table-row-item', this.props.className)}>{this.props.text}</div>
    );
  }
}

export default TableRowItem;
