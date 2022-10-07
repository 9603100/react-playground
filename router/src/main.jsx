import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import Route from "./router/Route";
import Root from "./Root";
import About from "./About";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
