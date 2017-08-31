import React from 'react';
// import Highcharts from 'highcharts';
import Highcharts from 'react-highcharts';

export default class Chart extends React.Component {
  constructor (...args) {
    super(...args);

    console.log(this.props);
  }

  // When the DOM is ready, create the chart.
  componentDidMount () {
    // Extend Highcharts with modules
    // if (this.props.modules) {
    //   this.props.modules.forEach(function (module) {
    //     // module(Highcharts)
    //   })
    // }

    console.log(this.props.options);
    // Set container which the chart should render to.
    // this.chart = new Highcharts.StockChart(
    //   this.props.options
    // );
  }
  // Destroy chart before unmount.
  componentWillUnmount () {
    // this.chart.destroy()
  }
  // configs.series = this.props.series;
  // return <ReactHighcharts config = {configs}></ReactHighcharts>;
  // Create the div which the chart will be rendered to.
  render () {
    let configs = this.props.config;

    return <Highcharts config = {configs}></Highcharts>;
  }
};
