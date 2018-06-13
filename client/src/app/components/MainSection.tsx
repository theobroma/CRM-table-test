//Very useful template for understanding structure of  https://github.com/tastejs/todomvc-app-css
import * as React from 'react';
import * as cx from 'classnames';
import { connect } from 'react-redux';
//mock data if needed
import mockClients from '../helpers/mockclients';
//import TableRow from './TableRow';
import TableRow from '../Containers/TableRow';

export default class MainSection extends React.Component<any, any> {
  _filterClients = (client: any) => {
    //const activeFilters = ['wood', 'silver'];
    const activeFilters: string[] = [];
    this.props.filters.forEach(function(filter: any) {
      if (filter.active) {
        activeFilters.push(filter.name);
      }
    });
    return activeFilters.indexOf(client.discountType) > -1;
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
      <div className="Table">
        <div className="Table-row Table-header">
          <div className="Table-row-item u-Flex-grow2">
            <div className="Table-column">
              <div className="Table-column-name">Клиент</div>
              <div className="Table-column-subname">Имя</div>
            </div>
          </div>
          <div className="Table-row-item">
            <div className="Table-column">
              <div className="Table-column-name">Скидка</div>
              <div className="Table-column-subname">Тип</div>
            </div>
          </div>
          <div className="Table-row-item">
            <div className="Table-column">
              <div className="Table-column-name">Потрачено</div>
              <div className="Table-column-subname">Грн</div>
            </div>
          </div>
          <div className="Table-row-item">
            <div className="Table-column">
              <div className="Table-column-name">СК.Сумма</div>
              <div className="Table-column-subname">Грн</div>
            </div>
          </div>
          <div className="Table-row-item">
            <div className="Table-column">
              <div className="Table-column-name">Скидка</div>
              <div className="Table-column-subname">Процент</div>
            </div>
          </div>
        </div>
        <div className="Table-body">{this.renderClients()}</div>
      </div>
    );
  }
}
