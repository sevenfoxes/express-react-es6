import Router, {Route} from "react-router";
import React           from "react";

import AppHandler from "./routeHandlers/AppHandler";
import Home       from "./routeHandlers/Home";
import Solution   from "./routeHandlers/Solution";
import About      from "./routeHandlers/About";

export default (
  <Route handler={ AppHandler }>
    <Route path="/" handler={Home} />
    <Route path="/about" handler={About}/>
    <Route path="/solution" handler={Solution}/>
    <Route path="/assets/app.css" />
  </Route>
);
