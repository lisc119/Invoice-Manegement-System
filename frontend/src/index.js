import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/Theme';
import * as theme from './style/Theme';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);


