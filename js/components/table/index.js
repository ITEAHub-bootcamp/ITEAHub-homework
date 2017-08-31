import React, {Component} from 'react';
import {repositories} from '../../mocks';
import PropTypes from 'prop-types'
import MyHighchart from '../highchart';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import styles from './table.scss';

const i18n = {
  en: {
    table: {
      id: 'Id',
      name: 'Name',
      description: 'Description',
      stargazers_count: 'Stargazers count',
      watchers: 'Watchres',
      forks: 'Forks',
      open_issues: 'Open issues'
    }
  },

  ua: {
    table: {
      name: 'Ім\'я'
    }
  },
}

export default class TableExampleControlled extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      language: 'en',
      repositories: repositories.items,
      visibleElements: repositories.items.filter((item, id) => id < 5 ),
      itemsShow: 5,
      chartData: [],
      selected: [],
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      showHeaderCheckboxes: false
    };
    this.getChartData = this.getChartData.bind(this);
  };

  getChartData = (rows: Array) => {
    let chartData = rows.map(i => {
      let rowData = this.state.visibleElements[i];
      return {
        name: rowData.name,
        data: [rowData.stargazers_count, rowData.watchers, rowData.forks, rowData.open_issues]
      }
    });
    this.setState({chartData: chartData, selected: rows});
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  render() {
    return (
      <div>
        <Table onRowSelection={this.getChartData} selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}>
          <TableHeader displaySelectAll={this.state.showHeaderCheckboxes}>
            <TableRow>
              <TableHeaderColumn>{i18n[this.state.language].table.id}</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].table.name}</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].table.description}</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].table.stargazers_count}</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].table.watchers}</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].table.forks}</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].table.open_issues}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.state.visibleElements.map( (row, index) => (
                <TableRow key={index} selected={this.isSelected(index)}>
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.description}</TableRowColumn>
                  <TableRowColumn>{row.stargazers_count}</TableRowColumn>
                  <TableRowColumn>{row.watchers}</TableRowColumn>
                  <TableRowColumn>{row.forks}</TableRowColumn>
                  <TableRowColumn>{row.open_issues}</TableRowColumn>
                </TableRow>
              ))
            } 
          </TableBody>
        </Table>
        <MyHighchart type={'bar'} dataChart={this.state.chartData}/>
      </div>
    );
  }
}