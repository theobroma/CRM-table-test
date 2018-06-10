//Very useful template for understanding structure of  https://github.com/tastejs/todomvc-app-css
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as cx from 'classnames';

import { Todo, IState } from '../model';

import Footer from '../components/Footer';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

import {
  setFilter,
  addTodo,
  removeTodo,
  toggleTodo,
  removeCompleted,
  editTodo,
  toggleFilter
} from '../actions';
//import getTodos from '../api';
//import { fetchTodos } from '../actions';
interface AppProps {}

class MainApp extends React.Component<any, any> {
  componentDidMount() {
    //this.props.fetchTodos();
  }

  render() {
    const { clients, filters } = this.props;
    let footer;

    const activeFiltersCount = filters.reduce(function(accum: any, filter: any) {
      return filter.active == true ? accum : accum + 1;
    }, 0);

    return (
      <div className="wrapper">
        {/* <header className="header">Header: Fixed height</header> */}
        <Header toggleFilter={this.props.toggleFilter} filters={this.props.filters} />
        <section className="content">
          <div className="columns">
            <main className="main">
              <MainSection clients={clients} filter={this.props.currentFilter} />
            </main>
            <aside className="sidebar-first">Sidebar first: Fixed width</aside>
            <aside className="sidebar-second">Sidebar second: Fixed width</aside>
          </div>
        </section>
        <footer className="footer">Footer: Fixed height</footer>
        {activeFiltersCount}
        {/* <MainSection clients={clients} filter={this.props.currentFilter} /> */}
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    clients: state.clients.data,
    filters: state.filters.data
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  setFilter: (filter: string) => dispatch(setFilter(filter)),
  toggleFilter: (filter: string) => dispatch(toggleFilter(filter)),
  removeCompleted: () => dispatch(removeCompleted()),
  addTodo: (text: string) => dispatch(addTodo(text)),
  removeTodo: (id: string) => dispatch(removeTodo(id)),
  toggleTodo: (id: string, completed: boolean, text: string) => {
    //console.log('TOGGLE');
    return dispatch(toggleTodo(id, completed, text));
  },
  editTodo: (id: string, completed: boolean, text: string) => {
    return dispatch(editTodo(id, completed, text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);
