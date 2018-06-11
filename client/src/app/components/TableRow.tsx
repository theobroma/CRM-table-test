import * as React from 'react';
import * as cx from 'classnames';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  state = {
    //editing: false
    //editing: this.props.rowEditing
    data: this.props.client
  };

  handleDoubleClick = (id: any) => {
    this.props.toggleRowEditing(id);
    //this.setState({ editing: true });
    //console.log('HandleDbClick from TableRow');
  };

  handleSaveRow = () => {
    console.log('Handle save from TableRow');
    this.props.editRow(this.state.data);
  };
  handleChangeRow(cellType: any, text: any) {
    console.log('handleChange from TableRow');
    console.log(cellType);
    console.log(text);
    if (cellType == 'spentSum') {
      let data = { ...this.state.data };
      data.spentSum = text;
      this.setState({ data }, () => console.log(this.state));
    }
    if (cellType == 'discountProcent') {
      let data = { ...this.state.data };
      data.discountProcent = text;
      this.setState({ data }, () => console.log(this.state));
    }
  }

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
          handleSave={(id: any, cellType: any, text: any) => this.handleSaveRow()}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={discountType}
          cellType="discountType"
          handleSave={(id: any, cellType: any, text: any) => this.handleSaveRow()}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={spentSum}
          cellType="spentSum"
          handleChangeRow={(cellType: any, text: any) => this.handleChangeRow(cellType, text)}
          handleSave={(id: any, cellType: any, text: any) => this.handleSaveRow()}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={22.33}
          cellType="discountSum"
          handleSave={(id: any, cellType: any, text: any) => this.handleSaveRow()}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={discountProcent}
          cellType="discountProcent"
          handleChangeRow={(cellType: any, text: any) => this.handleChangeRow(cellType, text)}
          handleSave={(id: any, cellType: any, text: any) => this.handleSaveRow()}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
      </div>
    );
  }
}

export default TableRow;
