import React, {Component} from 'react';
import Table, {
  TableBody,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

import Chart from '../highchartsGenerating/Highcharts';

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
  // series: []
  series: [
    {
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2]

    }, {
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4]

    }, {
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4]

    }, {
      name: 'Berlin',
      data: [42.4, 33.2, 34.5, 39.7]
    }, {
      name: 'Kyiv',
      data: [56.4, 45.2, 68.5, 39.7]
    }
  ]
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
    console.log('here');
  }

  render () {
    return (
      <div>
        <Table multiSelectable={ true }  >
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

                  return <Row key={ item.id } item={ item }/>
                }
            )}
          </TableBody>
        </Table>

        <div className="container">
          <Chart config={this.state.config} />
        </div>
      </div>
    )};
}

class Row extends Component {
   onRowClock = (event) => {
    console.log('here', this);
    let selectedItems = this.state.selectedItem;
  };

  constructor (...args) {
    super(...args);

    this.state = {
      repositories,
      selectedItem: []
    };
  }

  render () {
    const { item, ...other } = this.props;

    // TODO: change highchart on click and read about .chart.config

    return (
      <TableRow {...other} onMouseUp={this.onRowClick.bind(this)}>
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

