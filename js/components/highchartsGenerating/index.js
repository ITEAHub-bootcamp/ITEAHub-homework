import React from 'react';
import Highcharts from 'react-highcharts';

export default class Chart extends React.Component {
  constructor (...args) {
    super(...args);
  }

  render () {
    return <Highcharts config = {this.props.config}></Highcharts>;
  }
};
