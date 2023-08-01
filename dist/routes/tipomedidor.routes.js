"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tipomedidor = require("../controllers/tipomedidor.controller");
//rutas de acceso
//get

var router = (0, _express.Router)();
router.get("/tipomedidor", _tipomedidor.getTipomedidor);
router.post("/tipomedidor", _tipomedidor.createNewTipomedido);
router.get("/tipomedidor/count", _tipomedidor.getTotalTipomedidor);
router.get("/tipomedidor/:id", _tipomedidor.getTipomedidoById);
router["delete"]("/tipomedidor/:id", _tipomedidor.deleteTipomedidoById);
router.put("/tipomedidor/:id", _tipomedidor.updateTipomedidoById);
var _default = router;
exports["default"] = _default;