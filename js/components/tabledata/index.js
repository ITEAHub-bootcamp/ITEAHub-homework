import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Diagram from '../diagram';

const multiSelectable = true,
      enableSelectAll = false,
      selectable = true,
      deselectOnClickaway = false,
      categoriesY = ['stargazers_count','watchers','forks','open_issues','score'];

export default class Tabledata extends Component {
  constructor  (...args) {
    super(...args);

    this.state = {
      listSelectedRows: []
    };

    this.selectRows = this.selectRows.bind(this);
  }

  // запис Array<number> це TypeScript не бажано, чистота коду
  selectRows ( rows: Array<number> ) {
    this.setState(
      {listSelectedRows: rows.map(item => this.props.repositories[item]) },
      () => this.tableBody.setState({ selectedRows: rows })
    );
  }

// add function for select rows
/*
 isSelected = (index) => {
 return this.state.selected.indexOf(index) !== -1;
 };
use
 <TableRow selected={this.isSelected(1)}>
* */

  render () {
    return (
      <div>
        <Table selectable={selectable} multiSelectable={multiSelectable} onRowSelection={ this.selectRows } >
          <TableHeader enableSelectAll={enableSelectAll}>
            <TableRow>
              {this.props.categories.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
            </TableRow>
          </TableHeader>
          <TableBody showRowHover deselectOnClickaway={deselectOnClickaway} ref={(tableBody) => { this.tableBody = tableBody; }}>>
            {this.props.repositories.map(item => <TableRow key={item.id}><TableRowColumn>{item.id}</TableRowColumn><TableRowColumn>{item.name}</TableRowColumn><TableRowColumn>{item.description}</TableRowColumn><TableRowColumn>{item.stargazers_count}</TableRowColumn><TableRowColumn>{item.watchers}</TableRowColumn><TableRowColumn>{item.forks}</TableRowColumn><TableRowColumn>{item.open_issues}</TableRowColumn><TableRowColumn>{item.score}</TableRowColumn></TableRow> )}
          </TableBody>
        </Table>
        <hr />
        <Diagram repositories={this.props.repositories} listSelectedRows={this.state.listSelectedRows} categoriesY={categoriesY} />
      </div>
     )
  }
}

/*
*
* idea with last post
* https://github.com/callemall/material-ui/issues/1897
*
* */
