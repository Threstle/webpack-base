import { Router } from "@cher-ami/router";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";

const routesList = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/test",
      component: TestPage,
    }
  ];
ReactDOM.render(
    <Router routes={routesList} base={"/"}>
        <App />
    </Router>,
    document.getElementById("app")
);