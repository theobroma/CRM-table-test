import * as React from 'react';
import * as cx from 'classnames';
import TodoTextInput from './TodoTextInput';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  state = {
    editing: false
  };

  handleDoubleClick = (id: any) => {
    this.props.handleDoubleClick(id);
    this.setState({ editing: true });
    console.log('HandleDbClick from CellItem');
  };

  handleSave = (id: string, text: string, completed: boolean) => {
    if (text.length === 0) {
      this.props.removeTodo(id);
    } else {
      this.props.editTodo(id, completed, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { _id, name, discountType, spentSum, discountProcent, gender } = this.props.client;
    return (
      <div className={cx({ 'Table-row': true })} onDoubleClick={() => this.handleDoubleClick(_id)}>
        <TableRowItem text={name} cellType="name" {...this.props} />
        <TableRowItem text={discountType} cellType="discountType" {...this.props} />
        <TableRowItem text={spentSum} cellType="spentSum" {...this.props} />
        <TableRowItem text={22.33} cellType="discountSum" {...this.props} />
        <TableRowItem text={discountProcent} cellType="discountProcent" {...this.props} />
      </div>
    );
  }
}

export default TableRow;

{
  /* <div className="table-row">
  <div className="table-cell">{name}</div>
  <div className="table-cell">{discountType}</div>
  <div className="table-cell">{spentSum}</div>
  <div className="table-cell">22.33</div>
  <div className="table-cell">{discountProcent}</div>
</div> */
}

{
  /* <div className="Table-row-item" data-header="Header1">
{name}
</div>
<div className="Table-row-item" data-header="Header2">
{discountType}
</div>
<div className="Table-row-item" data-header="Header3">
{spentSum}
</div>
<div className="Table-row-item" data-header="Header4">
22.33
</div>
<div className="Table-row-item" data-header="Header4">
{discountProcent}
</div> */
}
