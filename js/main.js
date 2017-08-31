import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonTable from './components/comparisonTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><ComparisonTable /></MuiThemeProvider>, document.getElementById('root'));
