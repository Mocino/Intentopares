"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _observacion = require("../controllers/observacion.controller");
//rutas de acceso
//get

var router = (0, _express.Router)();
router.get("/observacion", _observacion.getObservacion);
router.post("/observacion", _observacion.createNewObservacio);
router.get("/observacion/count", _observacion.getTotalObservacion);
router.get("/observacion/:id", _observacion.getObservacioById);
router["delete"]("/observacion/:id", _observacion.deleteObservacioById);
router.put("/observacion/:id", _observacion.updateObservacioById);
var _default = router;
exports["default"] = _default;