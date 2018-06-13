import { connect } from 'react-redux';
import * as React from 'react';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
//import getActiveFilters from '../reducer';
import { toggleFilter } from '../actions';

// .container
// .left-sidebar
//   | left-sidebar
// .header
//   | Header
// .main-content
//   include components/_table
// .right-sidebar
//   | right-sidebar

class MainApp extends React.Component<any, any> {
  render() {
    const { clients, filters, activeFilters } = this.props;
    let footer;

    const activeFiltersCount = activeFilters.length;

    return (
      <div className="container">
        <aside className="left-sidebar" />
        <Header
          toggleFilter={this.props.toggleFilter}
          filters={this.props.filters}
          activeFiltersCount={activeFiltersCount}
        />
        <main className="main-content">
          <MainSection
            clients={clients}
            filters={this.props.filters}
            editCell={this.props.editCell}
          />
        </main>
        <aside className="right-sidebar" />
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
