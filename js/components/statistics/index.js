import React, {Component} from 'react';

// imports for table
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// imports for charts
import Chart from '../chart';
import {repositories} from '../../mocks';

import statistics_style from './statistics.scss';

export default class Statistics extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      chartCollections: []
    }
    this._onRowSelection = this._onRowSelection.bind(this);
  }
  
  _onRowSelection(rows) {
    const collections = rows.map(i => {
      let set = repositories.items[i];
      return {
        name: set.name,
        data: [set.stargazers_count, set.watchers, set.forks, set.open_issues]
      };
    });

    this.setState({ chartCollections: collections }, () => this.tableBody.setState({ selectedRows: rows }));
  }

  render () {
    return (
      <div>
        <Table 
          selectable={true} 
          multiSelectable={true}
          showRowHover={true}
          onRowSelection={this._onRowSelection}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>id</TableHeaderColumn>
              <TableHeaderColumn>name</TableHeaderColumn>
              <TableHeaderColumn>description</TableHeaderColumn>
              <TableHeaderColumn>stargazers_count</TableHeaderColumn>
              <TableHeaderColumn>watchers</TableHeaderColumn>
              <TableHeaderColumn>forks</TableHeaderColumn>
              <TableHeaderColumn>open_issues</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody ref={(tableBody) => { this.tableBody = tableBody; }}>
            { repositories.items.map( 
              item => { 
                return (
                  <TableRow key={item.id}>
                    <TableRowColumn>{item.id}</TableRowColumn>
                    <TableRowColumn>{item.name}</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn>{item.stargazers_count}</TableRowColumn>
                    <TableRowColumn>{item.watchers}</TableRowColumn>
                    <TableRowColumn>{item.forks}</TableRowColumn>
                    <TableRowColumn>{item.open_issues}</TableRowColumn>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
        <Chart series={this.state.chartCollections} />
      </div>
    );
  }
}
