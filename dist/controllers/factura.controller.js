"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFacturById = exports.getTotalFactura = exports.getFactura = exports.getFacturById = exports.deleteFacturById = exports.createNewFactur = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
//mostrar campos
var getFactura = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.querys.getAllFactura);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getFactura(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//crear campo
exports.getFactura = getFactura;
var createNewFactur = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, IdCliente = _req$body.IdCliente, IdEmpleado = _req$body.IdEmpleado, LecturaActual = _req$body.LecturaActual, LecturaAntigua = _req$body.LecturaAntigua, FechaEmision = _req$body.FechaEmision, IdObservacion = _req$body.IdObservacion;
          (0, _objectDestructuringEmpty2["default"])(req.body);

          // validating
          if (!(IdCliente == null || IdEmpleado == null || LecturaActual == null || LecturaAntigua == null || FechaEmision == null || IdObservacion == null)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: "Campos Incompletos!"
          }));
        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context2.sent;
          _context2.next = 10;
          return pool.request().input("IdObservacion", _database.sql.INT, IdObservacion).input("FechaEmision", _database.sql.Date, FechaEmision).input("LecturaAntigua", _database.sql.INT, LecturaAntigua).input("LecturaActual", _database.sql.INT, LecturaActual).input("IdEmpleado", _database.sql.INT, IdEmpleado).input("IdCliente", _database.sql.INT, IdCliente).query(_database.querys.addNewFactur);
        case 10:
          res.json({
            Nombre: Nombre,
            Email: Email,
            Contraseña: Contraseña
          });
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](4);
          res.status(500);
          res.send(_context2.t0.message);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 13]]);
  }));
  return function createNewFactur(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//consultar campo por ID
exports.createNewFactur = createNewFactur;
var getFacturById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("IdFactura", req.params.IdFactura).query(_database.querys.getFacturaById);
        case 6:
          result = _context3.sent;
          return _context3.abrupt("return", res.json(result.recordset[0]));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getFacturById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Eliminar campo por ID
exports.getFacturById = getFacturById;
var deleteFacturById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("IdFactura", req.params.IdFactura).query(_database.querys.deleteFactur);
        case 6:
          result = _context4.sent;
          if (!(result.rowsAffected[0] === 0)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.sendStatus(404));
        case 9:
          return _context4.abrupt("return", res.sendStatus(204));
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send(_context4.t0.message);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function deleteFacturById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Mostrar el total de campo
exports.deleteFacturById = deleteFacturById;
var getTotalFactura = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context5.sent;
          _context5.next = 5;
          return pool.request().query(_database.querys.getTotalFacturas);
        case 5:
          result = _context5.sent;
          console.log(result);
          res.json(result.recordset[0][""]);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getTotalFactura(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//Actualizar el campo
exports.getTotalFactura = getTotalFactura;
var updateFacturById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, IdCliente = _req$body2.IdCliente, IdEmpleado = _req$body2.IdEmpleado, LecturaActual = _req$body2.LecturaActual, LecturaAntigua = _req$body2.LecturaAntigua, FechaEmision = _req$body2.FechaEmision, IdObservacion = _req$body2.IdObservacion; // validating
          if (!(IdCliente == null || IdEmpleado == null || LecturaActual == null || LecturaAntigua == null || FechaEmision == null || IdObservacion == null)) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: "Campos Incompletos"
          }));
        case 3:
          _context6.prev = 3;
          _context6.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return pool.request().input("IdObservacion", _database.sql.INT, IdObservacion).input("FechaEmision", _database.sql.Date, FechaEmision).input("LecturaAntigua", _database.sql.INT, LecturaAntigua).input("LecturaActual", _database.sql.INT, LecturaActual).input("IdEmpleado", _database.sql.INT, IdEmpleado).input("IdCliente", _database.sql.INT, IdCliente).input("IdFactura", req.params.IdFactura).query(_database.querys.updateFacturById);
        case 9:
          res.json({
            Nombre: Nombre,
            Email: Email,
            Contraseña: Contraseña
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](3);
          res.status(500);
          res.send(_context6.t0.message);
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 12]]);
  }));
  return function updateFacturById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateFacturById = updateFacturById;