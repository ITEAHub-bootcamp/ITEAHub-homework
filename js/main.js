import React from 'react';
import ReactDOM from 'react-dom';
import TableWithData from './components/tableHichart/TableReact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><TableWithData /></MuiThemeProvider>, document.getElementById('root'));