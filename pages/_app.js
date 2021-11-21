import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { observable } from "mobx";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
