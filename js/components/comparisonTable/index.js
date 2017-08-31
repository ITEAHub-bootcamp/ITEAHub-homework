import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Table, {
  TableBody,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

import Chart from '../highchartsGenerating/index';

import {repositories} from '../../mocks';

let config = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Stacked Bar chart'
  },
  xAxis: {
    categories: [
      'stargazers_count',
      'watchers',
      'forks',
      'open_issues'
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    },
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: []
};

import styles from './list.scss';

export default class ComparisonTable extends Component {

  constructor (...args) {
    super(...args);

    this.state = {
      repositories,
      config
    };
  }

  onRowClick(event) {
   if (event && event.constructor === Array) {
      event.map( index => {
       let currentItem = repositories.items[index];

        config.series.push({
            name: currentItem.name,
            data: [
              currentItem.stargazers_count,
              currentItem.watchers,
              currentItem.forks,
              currentItem.open_issues
            ]}
        );
     });

     this.setState({ config: config});
   }
  }

  render () {
    return (
      <div>
        <Table multiSelectable={ true } onRowSelection={this.onRowClick.bind(this)} >
          <TableHeader displaySelectAll={ false }>

            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Stargazers count</TableHeaderColumn>
              <TableHeaderColumn>watchers</TableHeaderColumn>
              <TableHeaderColumn>forks</TableHeaderColumn>
              <TableHeaderColumn>open_issues</TableHeaderColumn>
            </TableRow>

          </TableHeader>

          <TableBody
            displayRowCheckbox={ true }>
            {
              repositories.items.map(
                ( item, index ) => {
                  if ( index >= 5 ) return;

                  return <Row key={ item.id } item={ item } onClick={ this.onRowClick(event) }/>
                }
            )}
          </TableBody>
        </Table>

        <div className="container">
          { console.log(this) }
          <Chart config={config} />
        </div>
      </div>
    )};
}

class Row extends Component {
  constructor (...args) {
    super(...args);
  }

  render () {
    const { item, ...other } = this.props;

    return (
      <TableRow {...other} >
        {other.children[0]}
        <TableRowColumn>{ item.id }</TableRowColumn>
        <TableRowColumn>{ item.name }</TableRowColumn>
        <TableRowColumn>{ item.description }</TableRowColumn>
        <TableRowColumn>{ item.stargazers_count }</TableRowColumn>
        <TableRowColumn>{ item.watchers }</TableRowColumn>
        <TableRowColumn>{ item.forks }</TableRowColumn>
        <TableRowColumn>{ item.open_issues }</TableRowColumn>
      </TableRow>
    )};
}

