import * as React from 'react';
import * as cx from 'classnames';

export default class FilterLink extends React.Component<any, any> {
  render() {
    const { activeFiltersCount, filters } = this.props;

    //get data of current filterLink
    const filter = filters.filter((filter: any) => {
      return filter.name == this.props.type.toLowerCase();
    })[0];
    //console.log(filter);
    return (
      <li
        className={cx({
          isDisabled: activeFiltersCount < 2 && filter.active
        })}
      >
        <a
          href="#"
          onClick={() => this.props.toggleFilter(this.props.type)}
          className={cx({
            selected: this.props.filter === this.props.type,
            active: filter.active,
            button: true
          })}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}
