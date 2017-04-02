import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MatherialCssTheme from './MatherialCssTheme.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin(); // It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.

const App  = (props) =>  {
    return (<MuiThemeProvider muiTheme={getMuiTheme(MatherialCssTheme)}>{props.children}</MuiThemeProvider>);
};

export default App;
