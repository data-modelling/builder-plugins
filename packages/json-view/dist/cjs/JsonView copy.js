"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJsonView = _interopRequireDefault(require("react-json-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JsonViewPlugin = function JsonViewPlugin(_ref) {
  var _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema;
  //console.log(typeof schema,schema)
  //const exportData = new Blob([ JSON.stringify(schema) ], { type: 'application/json' });
  //const exportUrl = window.URL.createObjectURL(exportData);

  /*
    <div>
          <a href={exportUrl} target="_blank"  download="schema.json" rel="noopener noreferrer" >Export</a>
          </div>
          <ReactJson src={schema} collapsed={false}/>
  */
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "Testing"));
};

JsonViewPlugin.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JsonViewPlugin",
  "props": {
    "schema": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "required": false
    }
  }
};
var _default = JsonViewPlugin;
exports["default"] = _default;