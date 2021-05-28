import React, { Fragment } from "react";
import { Router, Link, Stack } from "@cher-ami/router";
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";

function App() {
  return (
    <div>
      <h1>Webpack base</h1>
      <ul>
          <li>
            <Link to={"/"}>HomePage</Link>{" "}
          </li>
          <li>
            <Link to={"/test"}>TestPage</Link>
          </li>
        </ul>
      <Stack />
    </div>
  );
}

export default App;