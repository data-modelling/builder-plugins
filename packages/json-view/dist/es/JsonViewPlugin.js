"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonViewPlugin = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJsonView = _interopRequireDefault(require("react-json-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var linkStyle = {
  marginBottom: '20px',
  marginTop: '20px',
  "& a": {
    fontSize: '20px'
  }
};

var JsonViewPlugin = function JsonViewPlugin(props) {
  var exportData = new Blob([JSON.stringify(props.schema)], {
    type: 'application/json'
  });
  var exportUrl = window.URL.createObjectURL(exportData);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: linkStyle
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: exportUrl,
    target: "_blank",
    download: "schema.json",
    rel: "noopener noreferrer"
  }, "Export")), /*#__PURE__*/_react["default"].createElement(_reactJsonView["default"], {
    src: props.schema,
    collapsed: false
  }));
};

exports.JsonViewPlugin = JsonViewPlugin;
JsonViewPlugin.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JsonViewPlugin"
};