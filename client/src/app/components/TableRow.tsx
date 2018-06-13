import * as React from 'react';
import * as cx from 'classnames';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  state = {
    data: this.props.client
  };

  handleDoubleClick = (id: any) => {
    this.props.toggleRowEditing(id);
  };

  handleSaveRow = () => {
    this.props.editRow(this.state.data);
    //sending empty line to stop editing
    this.props.toggleRowEditing('');
  };
  handleChangeRow(cellType: any, text: any) {
    if (cellType == 'spentSum') {
      let data = { ...this.state.data };
      data.spentSum = text;
      //this.setState({ data }, () => console.log(this.state));
      this.setState({ data });
    }
    if (cellType == 'discountProcent') {
      let data = { ...this.state.data };
      data.discountProcent = text;
      //this.setState({ data }, () => console.log(this.state));
      this.setState({ data });
    }
  }

  render() {
    const { _id, name, discountType, spentSum, discountProcent, gender } = this.props.client;
    const someProps = {
      isRowEditing: this.props.isRowEditing,
      handleSave: () => this.handleSaveRow(),
      handleChangeRow: (cellType: any, text: any) => this.handleChangeRow(cellType, text)
    };

    return (
      <div
        className={cx({
          'Table-row': true,
          active: this.props.isRowEditing
        })}
        onDoubleClick={() => this.handleDoubleClick(_id)}
      >
        <TableRowItem
          className="u-Flex-grow2 Table-item-name"
          text={name}
          cellType="name"
          {...someProps}
        />
        <TableRowItem
          className="Table-item-discountType"
          text={discountType}
          cellType="discountType"
          {...someProps}
        />
        <TableRowItem
          className="Table-item-spentSum"
          text={spentSum}
          cellType="spentSum"
          {...someProps}
        />
        <TableRowItem
          className="Table-item-discountSum"
          text={22.33}
          cellType="discountSum"
          {...someProps}
        />
        <TableRowItem
          className="Table-item-discountProcent"
          text={discountProcent}
          cellType="discountProcent"
          {...someProps}
        />
      </div>
    );
  }
}

export default TableRow;
