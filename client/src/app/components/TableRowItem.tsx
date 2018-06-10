import * as React from 'react';
import * as cx from 'classnames';
//mock data if needed
import TodoTextInput from './TodoTextInput';

export class TableRowItem extends React.Component<any, any> {
  state = {
    editing: true
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
      element = <TodoTextInput text={this.props.text} />;
    } else {
      element = <div className="Table-row-item">{this.props.text}</div>;
    }
    //element = <div className="Table-row-item">{this.props.value}</div>;
    return <React.Fragment>{element}</React.Fragment>;
  }
}

export default TableRowItem;
