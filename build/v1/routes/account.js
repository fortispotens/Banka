"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user"));

var _account = _interopRequireDefault(require("../controllers/account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _account["default"].create);
router.patch('/:accountNumber', _account["default"].patchOne);
router.get('/', _account["default"].getallAccounts);
router.get('/:id', _account["default"].getOne);
var _default = router;
exports["default"] = _default;