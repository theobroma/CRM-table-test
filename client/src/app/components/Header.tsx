import * as React from 'react';
import { connect } from 'react-redux';

import FilterLink from './FilterLink';

export default class Header extends React.Component<any, any> {
  render() {
    const someProps = {
      toggleFilter: this.props.toggleFilter,
      filter: this.props.filter,
      filters: this.props.filters,
      activeFiltersCount: this.props.activeFiltersCount
    };
    return (
      <header className="header">
        <div className="sidebar-first-pad">1231</div>
        <div className="buttons">
          <ul className="filters">
            <FilterLink type={'GOLD'} {...someProps}>
              Gold
            </FilterLink>
            <FilterLink type={'SILVER'} {...someProps}>
              Silver
            </FilterLink>
            <FilterLink type={'WOOD'} {...someProps}>
              Wood
            </FilterLink>
            <FilterLink type={'STANDART'} {...someProps}>
              Standart
            </FilterLink>
          </ul>
        </div>
        <div className="header-profile">admin</div>
      </header>
    );
  }
}
