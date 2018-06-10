//Very useful template for understanding structure of  https://github.com/tastejs/todomvc-app-css
import * as React from 'react';
import * as cx from 'classnames';
import { connect } from 'react-redux';
//mock data if needed
import mockData from '../helpers/mockdata';
import mockClients from '../helpers/mockclients';
import { Todo, IState } from '../model';
import CellItem from './CellItem';

interface MainSectionProps {
  //todoarr: Todo[];
}
interface MainSectionState {}

//replace todoarr with state from redux or reverse
export default class MainSection extends React.Component<any, any> {
  // _filterTodos = (todo: any) =>
  //   this.props.filter === 'SHOW_ALL' ||
  //   (this.props.filter === 'SHOW_ACTIVE' && !todo.completed) ||
  //   (this.props.filter === 'SHOW_COMPLETED' && todo.completed);
  // //TODO: implement toggle-all
  // // <input className="toggle-all" type="checkbox" checked={completedCount === todos.length} />
  // _renderToggleAll(completedCount: any) {
  //   const { todos } = this.props;
  //   if (todos.length) {
  //     return <input className="toggle-all" type="checkbox" />;
  //   }
  //   return null;
  // }

  // renderTodos() {
  //   const { todos } = this.props;
  //   //mock with todoarr if needed
  //   return todos
  //     .filter(this._filterTodos)
  //     .map((todo: any) => (
  //       <TodoItem
  //         key={todo._id}
  //         todo={todo}
  //         addTodo={this.props.addTodo}
  //         removeTodo={this.props.removeTodo}
  //         toggleTodo={this.props.toggleTodo}
  //         editTodo={this.props.editTodo}
  //       />
  //     ));
  // }

  renderClients() {
    const { clients } = this.props;
    //mock with todoarr if needed
    return clients.map((client: any) => <CellItem key={client._id} client={client} />);
  }

  render() {
    const { clients } = this.props;
    return (
      <section className="sheet-container">
        <div className="table-header">
          <div className="table-header-item">Клиент</div>
          <div className="table-header-item">Скидка</div>
          <div className="table-header-item">Потрачено</div>
          <div className="table-header-item">СК.Сумма</div>
          <div className="table-header-item">Скидка</div>
        </div>
        <div className="table-body">{this.renderClients()}</div>
      </section>
    );
  }
}

{
  /* <section className="sheet-container">
<div className="table-header">
  <div className="table-header-item">Клиент</div>
  <div className="table-header-item">Скидка</div>
  <div className="table-header-item">Потрачено</div>
  <div className="table-header-item">СК.Сумма</div>
  <div className="table-header-item">Скидка</div>
</div>
<div className="table-body">{this.renderClients()}</div>
</section> */
}
