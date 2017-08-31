import React from 'react';
import Highcharts from 'react-highcharts';

export default class Chart extends React.Component {
  constructor (...args) {
    super(...args);
  }

  render () {
    let configs = this.props.config;

    return <Highcharts config = {configs}></Highcharts>;
  }
};
