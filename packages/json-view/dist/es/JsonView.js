"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJsonView = _interopRequireDefault(require("react-json-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var JsonView = function JsonView(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema,
      props = _objectWithoutProperties(_ref, ["theme", "schema"]);

  var exportData = new Blob([JSON.stringify(schema)], {
    type: 'application/json'
  });
  var exportUrl = window.URL.createObjectURL(exportData);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      "margin-top": "20px",
      "margin-bottom": "20px"
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: exportUrl,
    target: "_blank",
    download: "schema.json",
    rel: "noopener noreferrer",
    style: {
      "font-size": "16px"
    }
  }, "Export")), /*#__PURE__*/_react["default"].createElement(_reactJsonView["default"], {
    src: schema,
    collapsed: false
  }));
};

JsonView.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JsonView",
  "props": {
    "theme": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "required": false
    },
    "schema": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "required": false
    }
  }
};
var _default = JsonView;
exports["default"] = _default;