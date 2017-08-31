import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render( <MuiThemeProvider><Page /></MuiThemeProvider>, document.getElementById('root'));
