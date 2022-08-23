import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ApplicationContextProvider } from "./store/ApplicationContext";
import { AlertContextProvider } from "./store/AlertContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApplicationContextProvider>
    <AlertContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </AlertContextProvider>
  </ApplicationContextProvider>
);
