import React, {Component} from 'react';
import {repositories} from '../../mocks';
import HighchartRepo from '../highchart/highchart.component.js';
import { Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui';

export default class RepositoriesTable extends Component {

  constructor(...props) {
    super(...props);

    this.state = ({
      repositories,
      selectedRows: [],
      reposToCompare: []
    });

    this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  get repositoriesList() {
    const itemsCount = 5;
    return this.state.repositories.slice(0, itemsCount)
  }

  get tableHeaders() {
    const titles = ['Id', 'Name', 'Description', 'Count', 'Watchers', 'Forks', 'Open issues']
    return titles.map((title, index) =>
      <TableHeaderColumn key={index}>{title}</TableHeaderColumn>
    )
  }

  get rowContent() {
    return this.repositoriesList.map((repo, index) =>
      <TableRow key={index}
        selected={this.state.selectedRows.indexOf(repo) !== -1}
      >
        <TableRowColumn> {repo.id} </TableRowColumn>
        <TableRowColumn> {repo.name} </TableRowColumn>
        <TableRowColumn> {repo.description} </TableRowColumn>
        <TableRowColumn> {repo.stargazers_count} </TableRowColumn>
        <TableRowColumn> {repo.watchers_count} </TableRowColumn>
        <TableRowColumn> {repo.forks} </TableRowColumn>
        <TableRowColumn> {repo.open_issues} </TableRowColumn>
        <TableRowColumn> {repo.open_issues} </TableRowColumn>
      </TableRow>)
  }

  handleRowSelection(rows) {
    this.state.reposToCompare  = rows.map(index => {
      return {
        name: this.repositoriesList[index].name,
        data: [this.repositoriesList[index].stargazers_count, this.repositoriesList[index].watchers_count, this.repositoriesList[index].forks, this.repositoriesList[index].open_issues]
      }
    })
      this.setState({selectedRows: rows}, () => this.tableBody.setState({ selectedRows: rows }));
  }

  render() {
    return (
      <div>
        <Table multiSelectable={true}
              onRowSelection={this.handleRowSelection} >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              {this.tableHeaders}
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} ref={(tableBody) => { this.tableBody = tableBody; }}>
              {this.rowContent}
          </TableBody>
        </Table>
        <HighchartRepo data={this.state.reposToCompare} />
      </div>
    );
  }
}
