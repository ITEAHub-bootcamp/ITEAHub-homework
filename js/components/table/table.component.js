import React, {Component} from 'react';
import {repositories} from '../../mocks';
import HighchartRepo from '../highchart/highchart.component.js';
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn} from 'material-ui';

export default class RepositoriesTable extends Component {

  constructor(...props) {
    super(...props);

    this.state = ({
      repositories,
      selectedRows: [],
      reposToCompare: []
    });
  }


  handleRowSelection(selectedRows) {
    this.repositoriesList.map((item, index)=>  {
      return selectedRows.map(i=> {if(i===index) {
        this.state.reposToCompare[index] = item
      }})
    })
  }

  get repositoriesList() {
    const itemsCount = 5;
    return this.state.repositories.slice(0, itemsCount)
  }

  render () {
    // pass data this.state.reposToCompare
    const chartOptions = {
      title: {
        text: ''
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      chart: {
        type: ''
      },
      series: [{
        name: '',
        data: []
      }]
    };

    return (
      <div>
        <Table multiSelectable={true}
               onRowSelection={this.handleRowSelection.bind(this)} >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Count</TableHeaderColumn>
              <TableHeaderColumn>Watchers</TableHeaderColumn>
              <TableHeaderColumn>Forks</TableHeaderColumn>
              <TableHeaderColumn>Open issues</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
            {this.repositoriesList.map((repo,index) =>
            <TableRow key={index}
                      selected={this.state.selectedRows.indexOf(index) !== -1} >
              <TableRowColumn> {repo.id} </TableRowColumn>
              <TableRowColumn> {repo.name} </TableRowColumn>
              <TableRowColumn> {repo.description} </TableRowColumn>
              <TableRowColumn> {repo.stargazers_count} </TableRowColumn>
              <TableRowColumn> {repo.watchers_count} </TableRowColumn>
              <TableRowColumn> {repo.forks} </TableRowColumn>
              <TableRowColumn> {repo.open_issues} </TableRowColumn>
            </TableRow>)}
          </TableBody>
        </Table>

        <HighchartRepo options={chartOptions}/>
      </div>
    );
  }
}
