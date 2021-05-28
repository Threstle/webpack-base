import React from "react";
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
    <div>
        <HomePage/>
    </div>
  );
}

export default App;