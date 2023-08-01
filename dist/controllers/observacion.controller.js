"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateObservacioById = exports.getTotalObservacion = exports.getObservacion = exports.getObservacioById = exports.deleteObservacioById = exports.createNewObservacio = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
//mostrar campos
var getObservacion = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getAllObservacion);
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
  return function getObservacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//crear campo
exports.getObservacion = getObservacion;
var createNewObservacio = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var Descripcion, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          Descripcion = req.body.Descripcion;
          (0, _objectDestructuringEmpty2["default"])(req.body);

          // validating
          if (!(Descripcion == null)) {
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
          return pool.request().input("Descripcion", _database.sql.VarChar, Descripcion).query(_database.querys.addNewObservacio);
        case 10:
          res.json({
            Descripcion: Descripcion
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
  return function createNewObservacio(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//consultar campo por ID
exports.createNewObservacio = createNewObservacio;
var getObservacioById = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.getObservacionById);
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
  return function getObservacioById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Eliminar campo por ID
exports.getObservacioById = getObservacioById;
var deleteObservacioById = /*#__PURE__*/function () {
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
          return pool.request().input("id", req.params.id).query(_database.querys.deleteObservacio);
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
  return function deleteObservacioById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Mostrar el total de campo
exports.deleteObservacioById = deleteObservacioById;
var getTotalObservacion = /*#__PURE__*/function () {
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
          return pool.request().query(_database.querys.getTotalObservacions);
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
  return function getTotalObservacion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//Actualizar el campo
exports.getTotalObservacion = getTotalObservacion;
var updateObservacioById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var Descripcion, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          Descripcion = req.body.Descripcion; // validating
          if (!(Descripcion == null)) {
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
          return pool.request().input("Descripcion", _database.sql.Decimal, Descripcion).input("id", req.params.id).query(_database.querys.updateObservacioById);
        case 9:
          res.json({
            Descripcion: Descripcion
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
  return function updateObservacioById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateObservacioById = updateObservacioById;