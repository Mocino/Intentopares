"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _factura = require("../controllers/factura.controller");
//rutas de acceso
//get

var router = (0, _express.Router)();
router.get("/factura", _factura.getFactura);
router.post("/factura", _factura.createNewFactur);
router.get("/factura/count", _factura.getTotalFactura);
router.get("/factura/:id", _factura.getFacturById);
router["delete"]("/factura/:id", _factura.deleteFacturById);
router.put("/factura/:id", _factura.updateFacturById);
var _default = router;
exports["default"] = _default;