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

  handleSave = (cellType: string, text: any) => {
    //this.props.editCell(id, cellType, text);
    this.props.handleSave(cellType, text);
    this.setState({ editing: false });
    console.log('Handle save from RowItem');
  };
  // handleDoubleClick = (id: any) => {
  //   this.props.handleDoubleClick(id);
  //   this.setState({ editing: true });
  //   console.log('HandleDbClick from CellItem');
  // };

  // handleSave = (id: string, text: string, completed: boolean) => {
  //   if (text.length === 0) {
  //     this.props.removeTodo(id);
  //   } else {
  //     this.props.editTodo(id, completed, text);
  //   }
  //   this.setState({ editing: false });
  // };

  render() {
    let element;
    if (this.state.editing) {
      element = (
        <div className="Table-row-item">
          <TextInput
            text={this.props.text}
            onSave={(cellType: any, text: any) => this.handleSave(cellType, text)}
            {...this.props}
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
