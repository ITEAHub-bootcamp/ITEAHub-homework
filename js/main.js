import React from 'react';
import ReactDOM from 'react-dom';
import RepositoriesTable from './components/table/table.component.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><RepositoriesTable /></MuiThemeProvider>, document.getElementById('root'));
