"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _routeHandlersAppHandler = require("./routeHandlers/AppHandler");

var _routeHandlersAppHandler2 = _interopRequireDefault(_routeHandlersAppHandler);

var _routeHandlersHome = require("./routeHandlers/Home");

var _routeHandlersHome2 = _interopRequireDefault(_routeHandlersHome);

var _routeHandlersSolution = require("./routeHandlers/Solution");

var _routeHandlersSolution2 = _interopRequireDefault(_routeHandlersSolution);

var _routeHandlersAbout = require("./routeHandlers/About");

var _routeHandlersAbout2 = _interopRequireDefault(_routeHandlersAbout);

exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { handler: _routeHandlersAppHandler2["default"] },
  _react2["default"].createElement(_reactRouter.Route, { path: "/", handler: _routeHandlersHome2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, { path: "/about", handler: _routeHandlersAbout2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, { path: "/solution", handler: _routeHandlersSolution2["default"] })
);
module.exports = exports["default"];