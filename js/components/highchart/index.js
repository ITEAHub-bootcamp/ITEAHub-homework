import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ReactHighcharts = require('react-highcharts');

export default class MyHighchart extends Component {
  constructor (...args) {
    super(...args);

    this.state = { 
      options: {
        chart: {
            type: this.props.type
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: ['stargazers_count', 'watchers', 'forks', 'open_issues']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [...this.props.dataChart]
      }
    };

  }

  componentWillReceiveProps(nextProps) {
    let options = this.state.options;
    options.series = nextProps.dataChart;
    this.setState({
      options
    });
  }
  
  render() {
    return <ReactHighcharts config={this.state.options}/>;
  }
}