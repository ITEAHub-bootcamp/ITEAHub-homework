import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

const configs = {
  chart: {
      type: 'bar'
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
          text: 'Total'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  }
}

export default class Chart extends Component {
  render () {
    configs.series = this.props.series;
    return <ReactHighcharts config = {configs}></ReactHighcharts>;
  }
}
