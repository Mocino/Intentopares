"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cliente = require("../controllers/cliente.controller");
//rutas de acceso
//get

var router = (0, _express.Router)();
router.get("/cliente", _cliente.getCliente);
router.post("/cliente", _cliente.createNewClient);
router.get("/cliente/count", _cliente.getTotalCliente);
router.get("/cliente/:id", _cliente.getClientById);
router["delete"]("/cliente/:id", _cliente.deleteClientById);
router.put("/cliente/:id", _cliente.updateClientById);
var _default = router;
exports["default"] = _default;