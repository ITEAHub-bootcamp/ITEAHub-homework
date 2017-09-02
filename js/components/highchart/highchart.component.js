import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

export default class HighchartRepo extends Component {

  get highchartCongif() {
    const chartOptions = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Comparative table'
        },
        xAxis: {
            categories: ['stargazers_count', 'watchers', 'forks', 'open_issues']
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: this.props.data
      }
    return chartOptions
  }

  render() {
    return (
      <ReactHighcharts config={this.highchartCongif}/>
    )
  }
}
