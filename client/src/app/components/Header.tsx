import * as React from 'react';
import { connect } from 'react-redux';

import TodoTextInput from './TodoTextInput';
import FilterLink from './FilterLink';

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="header">
        <div className="sidebar-first-pad">1231</div>
        <div className="buttons">
          <ul className="filters">
            <FilterLink type={'GOLD'} {...this.props}>
              Gold
            </FilterLink>
            <FilterLink type={'SILVER'} {...this.props}>
              Silver
            </FilterLink>
            <FilterLink type={'WOOD'} {...this.props}>
              Wood
            </FilterLink>
            <FilterLink type={'STANDART'} {...this.props}>
              Standart
            </FilterLink>
          </ul>
        </div>
        <div className="header-profile">admin</div>
      </header>
    );
  }
}

{
  /* <a className="button">Gold</a>
<a className="button">Silver</a>
<a className="button">Wood</a>
<a className="button">Standart</a> */
}
