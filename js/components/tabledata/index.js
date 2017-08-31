import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Diagram from '../diagram';

export default class Tabledata extends Component {
  constructor  (...args) {
    super(...args);

    this.state = {
      multiSelectable: true,
      enableSelectAll: false,
      selectable: true,
      listSelectedRows: [],
      categoriesY: ['stargazers_count','watchers','forks','open_issues','score']
    };

    this.selectRows = this.selectRows.bind(this);
  }

  selectRows ( rows: Array<number> ) {
    this.setState({listSelectedRows: rows.map(item => this.props.repositories[item]) }, () => this.tableBody.setState({ selectedRows: rows }));
  }

  render () {
    return (
      <div>
        <Table selectable={this.state.selectable} multiSelectable={this.state.multiSelectable} onRowSelection={ this.selectRows } >
          <TableHeader enableSelectAll={this.state.enableSelectAll}>
            <TableRow>
              {this.props.categories.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
            </TableRow>
          </TableHeader>
          <TableBody showRowHover ref={(tableBody) => { this.tableBody = tableBody; }}>>
            {this.props.repositories.map(item => <TableRow key={item.id}><TableRowColumn>{item.id}</TableRowColumn><TableRowColumn>{item.name}</TableRowColumn><TableRowColumn>{item.description}</TableRowColumn><TableRowColumn>{item.stargazers_count}</TableRowColumn><TableRowColumn>{item.watchers}</TableRowColumn><TableRowColumn>{item.forks}</TableRowColumn><TableRowColumn>{item.open_issues}</TableRowColumn><TableRowColumn>{item.score}</TableRowColumn></TableRow> )}
          </TableBody>
        </Table>
        <hr />
        <Diagram repositories={this.props.repositories} listSelectedRows={this.state.listSelectedRows} categoriesY={this.state.categoriesY} />
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
