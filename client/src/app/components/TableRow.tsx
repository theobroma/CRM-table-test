import * as React from 'react';
import * as cx from 'classnames';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  // state = {
  //   //editing: false
  //   editing: this.props.rowEditing
  // };

  handleDoubleClick = (id: any) => {
    this.props.toggleRowEditing(id);
    //this.setState({ editing: true });
    //console.log('HandleDbClick from TableRow');
  };

  handleSave = (id: any, cellType: any, text: any) => {
    this.props.editCell(id, cellType, text);
    //this.setState({ editing: false });
  };

  handleOnBlur = () => {
    //this.setState({ editing: false });
    //console.log('handleOnBlur from TableRow');
  };
  //FIXME: enhance DRY
  render() {
    const { _id, name, discountType, spentSum, discountProcent, gender } = this.props.client;
    return (
      <div
        className={cx({
          'Table-row': true,
          active: this.props.isRowEditing
        })}
        onDoubleClick={() => this.handleDoubleClick(_id)}
      >
        <TableRowItem
          text={name}
          cellType="name"
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={discountType}
          cellType="discountType"
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={spentSum}
          cellType="spentSum"
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={22.33}
          cellType="discountSum"
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={discountProcent}
          cellType="discountProcent"
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
      </div>
    );
  }
}

export default TableRow;
