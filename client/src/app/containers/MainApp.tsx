import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as cx from 'classnames';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
//import getActiveFilters from '../reducer';
import { toggleFilter } from '../actions';
interface AppProps {}

class MainApp extends React.Component<any, any> {
  render() {
    const { clients, filters, activeFilters } = this.props;
    let footer;

    const activeFiltersCount = activeFilters.length;

    return (
      <div className="wrapper">
        {/* <header className="header">Header: Fixed height</header> */}
        <Header
          toggleFilter={this.props.toggleFilter}
          filters={this.props.filters}
          activeFiltersCount={activeFiltersCount}
        />
        <section className="content">
          <div className="columns">
            <main className="main">
              <MainSection
                clients={clients}
                filters={this.props.filters}
                editCell={this.props.editCell}
              />
            </main>
            <aside className="sidebar-first">Sidebar first: Fixed width</aside>
            <aside className="sidebar-second">Sidebar second: Fixed width</aside>
          </div>
        </section>
        <footer className="footer">Footer: Fixed height</footer>
      </div>
    );
  }
}

function getActiveFiltersCount(state: any, props: any) {
  return state.filters.data.filter((filter: any) => {
    return filter.active;
  });
}

const mapStateToProps = (state: any, props: any) => {
  return {
    clients: state.clients.data,
    filters: state.filters.data,
    activeFilters: getActiveFiltersCount(state, props)
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleFilter: (filter: string) => dispatch(toggleFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);
