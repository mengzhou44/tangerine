import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import GlobalStyle from "./components/_styles/global-style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);