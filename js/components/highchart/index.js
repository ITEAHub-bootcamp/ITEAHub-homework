import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ReactHighcharts = require('react-highcharts');
// require('highcharts/modules/funnel')(highcharts);

export default class MyHighchart extends Component {
  constructor (...args) {
    super(...args);
    console.log(ReactHighcharts);

    this.state = {
      chart: this.props.chart,
      container: this.props.container, 
      options: {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
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
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
      },
      type: this.props.type
    };

  }

  // componentDidMount() {
  //   // Extend Highcharts with modules
  //   // if (this.props.modules) {
  //   //   this.props.modules.forEach(function (module) {
  //   //     module(Highcharts);
  //   //   });
  //   // }
  //   // Set container which the chart should render to.
  //   this.chart = new ReactHighcharts[this.state.options.chart.type || "Chart"](
  //     this.state.container, 
  //     this.state.options
  //   );
  // }
  // //Destroy chart before unmount.
  // componentWillUnmount() {
  //   this.chart.destroy();
  // }
  //Create the div which the chart will be rendered to.
  render() {
    return <ReactHighcharts config={this.state.container}/>;
  }
}