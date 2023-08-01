"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empleado = require("../controllers/empleado.controller");
//rutas de acceso
//get

var router = (0, _express.Router)();
router.get("/empleado", _empleado.getEmpleado);
router.post("/empleado", _empleado.createNewEmplead);
router.get("/empleado/count", _empleado.getTotalEmpleado);
router.get("/empleado/:id", _empleado.getEmpleadById);
router["delete"]("/empleado/:id", _empleado.deleteEmpleadById);
router.put("/empleado/:id", _empleado.updateEmpleadById);
var _default = router;
exports["default"] = _default;