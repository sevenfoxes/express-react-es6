import React from "react";
import Router, {Route} from "react-router";

let RouteHandler = Router.RouteHandler;

export default class AppHandler extends React.Component {
  render() {
    return <div><RouteHandler/></div>;
  }
}
