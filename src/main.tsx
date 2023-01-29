import { Amplify } from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

import App from "@/App";
import config from "@/aws-exports";
import { store } from "@/redux/storeConfig/store";
import "@/styles/index.scss";

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
