import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme } from './components/theme/theme.js';

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url("https://fonts.googleapis.com/css?family=Raleway:400,600");
  }
 @font-face {
    font-family: 'Open Sans';
    src: url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");
 }
 * {
  font-family: 'Open Sans';
  }
`;


ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById('root'),
  );
  registerServiceWorker();