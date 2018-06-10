import * as React from 'react';
import * as cx from 'classnames';
//mock data if needed
import { Todo, IState } from '../model';
import TodoTextInput from './TodoTextInput';

export class TodoItem extends React.Component<any, any> {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id: string, text: string, completed: boolean) => {
    if (text.length === 0) {
      this.props.removeTodo(id);
    } else {
      this.props.editTodo(id, completed, text);
    }
    this.setState({ editing: false });
  };
  //onSave same name method as in Header component
  //caused by reuse in different components: this and Header
  render() {
    // const { removeTodo, toggleTodo } = this.props;
    // const { _id, text, completed } = this.props.todo;
    const { _id, name, discountType, spentSum, discountProcent, gender } = this.props.client;
    return (
      <div className="table-row">
        <div className="table-cell">{name}</div>
        <div className="table-cell">{discountType}</div>
        <div className="table-cell">{spentSum}</div>
        <div className="table-cell">22.33</div>
        <div className="table-cell">{discountProcent}</div>
      </div>
    );
  }
}

export default TodoItem;
