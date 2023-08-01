"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tipocliente = require("../controllers/tipocliente.controller");
//rutas de acceso
//get

var router = (0, _express.Router)();
router.get("/tipocliente", _tipocliente.getTipocliente);
router.post("/tipocliente", _tipocliente.createNewTipoclient);
router.get("/tipocliente/count", _tipocliente.getTotalTipocliente);
router.get("/tipocliente/:id", _tipocliente.getTipoclientById);
router["delete"]("/tipocliente/:id", _tipocliente.deleteTipoclientById);
router.put("/tipocliente/:id", _tipocliente.updateTipoclientById);
var _default = router;
exports["default"] = _default;