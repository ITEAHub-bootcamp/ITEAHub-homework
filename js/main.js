import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './components/table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><Articles/></MuiThemeProvider>, document.getElementById('root'));
