"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _tipocliente = _interopRequireDefault(require("./routes/tipocliente.routes"));
var _tipomedidor = _interopRequireDefault(require("./routes/tipomedidor.routes"));
var _cliente = _interopRequireDefault(require("./routes/cliente.routes"));
var _empleado = _interopRequireDefault(require("./routes/empleado.routes"));
var _observacion = _interopRequireDefault(require("./routes/observacion.routes"));
var _factura = _interopRequireDefault(require("./routes/factura.routes"));
var _morgan = _interopRequireDefault(require("morgan"));
var _config = _interopRequireDefault(require("./config"));
var app = (0, _express["default"])();

// settings
app.set("port", _config["default"].port);

// Middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());

// Routes
app.use("/api", _products["default"]);
app.use("/api", _tipocliente["default"]);
app.use("/api", _tipomedidor["default"]);
app.use("/api", _cliente["default"]);
app.use("/api", _empleado["default"]);
app.use("/api", _observacion["default"]);
app.use("/api", _factura["default"]);
var _default = app;
exports["default"] = _default;