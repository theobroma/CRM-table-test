//Very useful template for understanding structure of  https://github.com/tastejs/todomvc-app-css
import * as React from 'react';
import * as cx from 'classnames';
import { connect } from 'react-redux';
//mock data if needed
import mockClients from '../helpers/mockclients';
import TableRow from './TableRow';

//replace todoarr with state from redux or reverse
export default class MainSection extends React.Component<any, any> {
  _filterClients = (client: any) => {
    //const activeFilters = ['wood', 'silver'];
    const activeFilters: string[] = [];
    this.props.filters.forEach(function(filter: any) {
      if (filter.active) {
        activeFilters.push(filter.name);
      }
    });
    const check = activeFilters.indexOf(client.discountType) > -1;
    return check ? true : false;
  };

  renderClients() {
    const { clients } = this.props;
    return clients
      .filter(this._filterClients)
      .map((client: any) => (
        <TableRow key={client._id} client={client} editCell={this.props.editCell} />
      ));
  }

  render() {
    const { clients } = this.props;
    return (
      <section className="sheet-container">
        <div className="Table">
          <div className="Table-row Table-header">
            <div className="Table-row-item">Клиент</div>
            <div className="Table-row-item">Скидка Тип</div>
            <div className="Table-row-item">Потрачено</div>
            <div className="Table-row-item">СК.Сумма</div>
            <div className="Table-row-item">Скидка Процент</div>
          </div>
          <div className="Table-body">{this.renderClients()}</div>
        </div>
      </section>
    );
  }
}
