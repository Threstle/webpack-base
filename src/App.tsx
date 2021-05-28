import React, { Fragment } from "react";
import { Router, Link, Stack } from "@cher-ami/router";
import HomePage from "./pages/homePage/HomePage";

const routesList = [
  {
    path: "/",
    component: HomePage,
  }
];

function App() {
  return (
    <Router routes={routesList} base={"/"}>
      <Fragment>
      <nav>
        <Link to={"/"} />
        <Link to={"/foo"} />
      </nav>
      <Stack />
      </Fragment>
    </Router>
  );
}

export default App;