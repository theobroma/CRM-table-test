import * as React from 'react';
import * as cx from 'classnames';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    //this.props.handleDoubleClick();
    this.setState({ editing: true });
    //console.log('HandleDbClick from TableRow');
  };

  handleSave = (id: any, cellType: any, text: any) => {
    this.props.editCell(id, cellType, text);
    this.setState({ editing: false });
  };

  handleOnBlur = () => {
    this.setState({ editing: false });
    //console.log('handleOnBlur from TableRow');
  };
  //FIXME: enhance DRY
  render() {
    const { _id, name, discountType, spentSum, discountProcent, gender } = this.props.client;
    return (
      <div
        className={cx({
          'Table-row': true,
          active: this.state.editing
        })}
        onDoubleClick={() => this.handleDoubleClick()}
      >
        <TableRowItem
          text={name}
          cellType="name"
          rowEditing={this.state.editing}
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={discountType}
          cellType="discountType"
          rowEditing={this.state.editing}
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={spentSum}
          cellType="spentSum"
          rowEditing={this.state.editing}
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={22.33}
          cellType="discountSum"
          rowEditing={this.state.editing}
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
        <TableRowItem
          text={discountProcent}
          cellType="discountProcent"
          rowEditing={this.state.editing}
          handleSave={(id: any, cellType: any, text: any) => this.handleSave(id, cellType, text)}
          handleOnBlur={() => this.handleOnBlur()}
          {...this.props}
        />
      </div>
    );
  }
}

export default TableRow;
