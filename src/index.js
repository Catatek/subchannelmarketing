import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/root/App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider, injectGlobal } from "styled-components";
import { theme } from "./components/theme/theme.js";

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url("https://fonts.googleapis.com/css?family=Raleway:400,600");
  }
 @font-face {
   font-family: 'Montserrat';
   src: url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600");
 }
 * {
 font-family: 'Montserrat';
 }
`;

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme} onUpdate={() => window.scrollTo(0, 0)}>
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  );
};

render();

if (module.hot) {
  module.hot.accept("./components/root/App", render);
}
registerServiceWorker();
