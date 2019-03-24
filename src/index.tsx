import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { injectGlobal } from "emotion";
import { store } from "./store";
import Root from "./modules/Root";

import "./styles.css";

injectGlobal`
  @font-face {
    font-family: 'ApexMK2-Regular';
    src: url('/fonts/ApexMk2-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'ApexMK2-Regular';
  }

  html {
    font-size:62.5%;
  }

  html, body, #root, .App {
    height: 100%;
    margin: 0;
  }
`;

const App = (
  <Provider store={store}>
    <Root />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(App, rootElement);
