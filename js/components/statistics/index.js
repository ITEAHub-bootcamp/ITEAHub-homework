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
// import Tr from '../table_row';

// imports for charts
import Chart from '../chart';
import {repositories} from '../../mocks';

import statistics_style from './statistics.scss';

export default class Statistics extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      tableProps: {
        selectable: true,
        multiSelectable: true,
        showRowHover: true 
      },
      tableData: {
        repos: repositories.items
      },
      chartCollections: []
    }
    this.handleRowSelection = this.handleRowSelection.bind(this);
  }
  
  componentDidMount() {
    console.log('I did mount!');
  }
  
  handleRowSelection(i) {
    let newCollection = this.state.tableData.repos[i];
    let currentCollections = this.state.chartCollections;

    currentCollections.push({
      name: newCollection.name, 
      data: [newCollection.stargazers_count, newCollection.watchers, newCollection.forks, newCollection.open_issues]
    })
    this.setState({ chartCollections: currentCollections });
  }

  render () {
    return (
      <div>
        <Table 
          selectable={this.state.tableProps.selectable} 
          multiSelectable={this.state.tableProps.multiSelectable}
          showRowHover={this.state.tableProps.showRowHover}
          onRowSelection={this.handleRowSelection}
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
          <TableBody>
            { this.state.tableData.repos.map( 
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
