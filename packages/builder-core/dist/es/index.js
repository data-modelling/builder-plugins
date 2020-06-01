"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ObjectTest: true,
  ComponentTest: true
};
exports.ComponentTest = exports.ObjectTest = void 0;

var _react = _interopRequireDefault(require("react"));

var _graphQLHelpers = require("./graphQLHelpers");

Object.keys(_graphQLHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _graphQLHelpers[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ObjectTest = {
  "test": "something"
};
exports.ObjectTest = ObjectTest;

var ComponentTest = /*#__PURE__*/_react["default"].createElement("div", null, "Testing React Component"); //export * from './tools'


exports.ComponentTest = ComponentTest;