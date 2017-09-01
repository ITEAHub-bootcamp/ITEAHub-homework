import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chart from './components/chartt/chart';
// import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

ReactDOM.render(<MuiThemeProvider><List /></MuiThemeProvider>, document.getElementById('root'));
