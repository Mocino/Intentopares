"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
//importamos de app.js

//que escuche el puerto
//llamamos el seting de app.js
_app["default"].listen(_app["default"].get('port'));
console.log('server on port', _app["default"].get('port'));