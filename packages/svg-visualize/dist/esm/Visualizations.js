"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@builder-plugins/core");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//import schemaJSON from "../../schema-1-54.json";
var SvgPanZoom = require("svg-pan-zoom");

var PF = require("pathfinding");

var titleHeight = 42;
var tblColMargin = 150;
var tblRowMargin = 200;
var squareSize = 10;
var viewFactor = 1.5;
var viewWidth = 0;
var viewHeight = 0;
var fieldColor = "#f6f8f8"; //const enumColor='#f6f8f8';

var typeColor = "#f06f20";
var tableColor = "darkgreen";
var enumColor = "#049";

function typeClick(event) {
  //console.log('MOUSE CLICK ',event);
  var elemID = event.currentTarget.id;

  if (elemID.startsWith("TYPE_TITLE")) {
    //event.preventDefault();
    var currentPaths = document.querySelectorAll(".line-path.field-hover");

    for (var pp = 0; pp < currentPaths.length; pp++) {
      currentPaths[pp].classList.remove("field-hover");
    }

    var paths = document.querySelectorAll(".line-path[data-to='" + elemID + "']");

    for (var p = 0; p < paths.length; p++) {
      paths[p].classList.add("field-hover");
    }

    var currentTitles = document.querySelectorAll(".type-title.selected");

    for (var pt = 0; pt < currentTitles.length; pt++) {
      currentTitles[pt].classList.remove("selected");
    } //const queryID='#'+elemID.replace(/\:/g,'\\\\:')
    //console.log(queryID+' .type-title');
    //console.log(document.querySelectorAll(queryID))


    var titleRect = document.querySelector("[data-title='" + elemID + "']");
    titleRect.querySelectorAll(".type-title")[0].classList.add("selected"); //titleRect[0].classList.add('selected')

    event.stopPropagation();
  } else {
    //console.log('OUTSIDE ',elemID);
    var _paths = document.querySelectorAll(".line-path.field-hover");

    for (var _p = 0; _p < _paths.length; _p++) {
      _paths[_p].classList.remove("field-hover");
    }

    var _currentTitles = document.querySelectorAll(".type-title.selected");

    for (var _pt = 0; _pt < _currentTitles.length; _pt++) {
      _currentTitles[_pt].classList.remove("selected");
    }
  }
}

function mouseOverEffect(elm) {
  //console.log('MOUSE OVER ',elm,elm.target.id);
  //console.log('MOUSE OVER TARGET',elm.target);
  //console.log('MOUSE OVER CURR ARGET',elm.currentTarget.id);
  //console.log('MOUSE OVER REL TARGET',elm.relatedTarget);
  //.field-hover
  var elemID = elm.currentTarget.id;

  if (elemID.startsWith("FIELD")) {
    //var container = document.querySelector("#userlist");
    //var matches = container.querySelectorAll("li[data-active='1']");
    var paths = document.querySelectorAll(".line-path[data-from='" + elemID + "']");

    for (var p = 0; p < paths.length; p++) {
      paths[p].classList.add("field-hover");
    }
  }
}

function mouseOutEffect(elm) {
  //console.log('MOUSE OUT ',elm,elm.currentTarget.id);
  var elemID = elm.currentTarget.id;

  if (elemID.startsWith("FIELD")) {
    //var container = document.querySelector("#userlist");
    //var matches = container.querySelectorAll("li[data-active='1']");
    var paths = document.querySelectorAll(".line-path[data-from='" + elemID + "']");

    for (var p = 0; p < paths.length; p++) {
      paths[p].classList.remove("field-hover");
    }
  }
}

function svgCircle(x, y) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "red";
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newElement.setAttribute("fill", fill); //Set  data

  newElement.setAttribute("cx", x); //Set  data

  newElement.setAttribute("cy", y); //Set  data

  newElement.setAttribute("r", r); //Set  data

  return newElement;
}

function svgPath(points, dataFrom, dataTo) {
  var groupElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  groupElement.classList.add("line-path");
  groupElement.dataset.from = dataFrom;
  groupElement.dataset.to = dataTo;
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  newElement.setAttribute("d", PathLine(points, 10)); //Set  data
  //newElement.setAttribute("d", buildSvgPath(path,size)); //Set  data

  newElement.setAttribute("fill", "none"); //Set  data

  newElement.setAttribute("marker-end", "url(#arrow)"); //Set  data
  //newElement.style.stroke = "red";
  //newElement.style.strokeWidth = "3px";
  //newElement.classList.add("line-path");
  //newElement.style['marker-end']
  //style='marker-mid:url(#markerArrow)';

  groupElement.appendChild(newElement);
  return groupElement;
  /*
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  newElement.setAttribute("d", PathLine(points, 10)); //Set  data
  //newElement.setAttribute("d", buildSvgPath(newPath,30)); //Set  data
  newElement.setAttribute("fill", 'none'); //Set  data
  newElement.style.stroke = "red";
  newElement.style.strokeWidth = "3px";
  svg.appendChild(newElement);*/
}

var isCollinear = function isCollinear(p1, p2, p3) {
  return (p1.y - p2.y) * (p1.x - p3.x) === (p1.y - p3.y) * (p1.x - p2.x);
};

var moveTo = function moveTo(b, a, r) {
  var vector = {
    x: b.x - a.x,
    y: b.y - a.y
  };
  var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  var unitVector = {
    x: vector.x / length,
    y: vector.y / length
  };
  return {
    x: a.x + unitVector.x * r,
    y: a.y + unitVector.y * r
  };
}; // smooth polyline


var PathLine = function PathLine(points, r) {
  var path = points.slice(1).reduce(function (acc, p, i, points) {
    var next = points[i + 1];
    var prev = acc[acc.length - 1];

    if (next && !isCollinear(prev.point, p, next)) {
      var before = moveTo(prev.point, p, r);
      var after = moveTo(next, p, r);
      return acc.concat({
        point: p,
        s: "L ".concat(before.x, " ").concat(before.y, " S ").concat(p.x, " ").concat(p.y, " ").concat(after.x, " ").concat(after.y, " ")
      });
    } else {
      return acc.concat({
        point: p,
        s: "L ".concat(p.x, " ").concat(p.y, " ")
      });
    }
  }, [{
    point: points[0],
    s: "M ".concat(points[0].x, " ").concat(points[0].y, " ")
  }]).map(function (p) {
    return p.s;
  }).join("");
  return path;
};

function minPointDistance(origin, points) {
  var d = 0;
  var x1 = origin[0];
  var y1 = origin[1];
  var pointIndex = 0;

  for (var i = 0; i < points.length; i++) {
    var x2 = points[i][0];
    var y2 = points[i][1];
    var a = x1 - x2;
    var b = y1 - y2;
    var distance = Math.hypot(a, b);

    if (distance < d || d === 0) {
      d = distance;
      pointIndex = i; //console.log('D =>',d,pointIndex);
    }
  } //console.log('D ',d,pointIndex);

  /*
  var a = x1 - x2;
  var b = y1 - y2;
  var c = Math.sqrt( a*a + b*b );
  // c is the distance
  you can shorten var c = Math.sqrt( aa + bb ); to var c = Math.hypot(a,b); 
  */


  return {
    distance: d,
    pointIndex: pointIndex
  };
}

var pathStyle = (0, _styledComponents.css)(["#svg-group > g.line-path{stroke:black;stroke-width:3px;pointer-events:stroke;cursor:pointer;fill:transparent;}#svg-group > g.line-path:hover{stroke:#da4567;stroke-width:6px;}#svg-group > g.line-path.field-hover{stroke:#da4567;stroke-width:6px;}.type-title.table{fill:", ";}.type-title.object{fill:", ";}.type-title.enum{fill:", ";}.type-title.selected{fill:red;}.type-title.lighten{-webkit-filter:brightness(85%);filter:brightness(85%);}"], tableColor, typeColor, enumColor);
var svgStyles = (0, _styledComponents.css)(["overflow:hidden;"]);

var SvgPrimitive = _styledComponents["default"].svg.attrs(function (props) {
  return {
    /*width:props.width,
    xmlns:"http://www.w3.org/2000/svg",
    xmlnsXlink:"http://www.w3.org/1999/xlink",
    xmlnsEv:"http://www.w3.org/2001/xml-events"
    */
  };
}).withConfig({
  displayName: "Visualizations__SvgPrimitive",
  componentId: "sc-1itic62-0"
})(["", ""], svgStyles);

function objectTypes(flds) {
  var oTypes = [];
  var tType = false;

  for (var i = 0; i < flds.length; i++) {
    if (flds[i].type.kind === "OBJECT" || flds[i].type.kind === "ENUM") {
      //if (oTypes.indexOf(flds[i].type.name) === -1)
      oTypes.push({
        object: flds[i].type.name,
        field: flds[i].name
      });
    }

    if (["LIST", "NON_NULL"].indexOf(flds[i].type.kind) > -1 && (flds[i].type.ofType.kind === "OBJECT" || flds[i].type.ofType.kind === "ENUM")) {
      //if (oTypes.indexOf(flds[i].type.ofType.name) === -1)
      oTypes.push({
        object: flds[i].type.ofType.name,
        field: flds[i].name
      });
    }

    if (flds[i].type.kind === "NON_NULL" && flds[i].type.ofType.kind === "LIST" && (flds[i].type.ofType.ofType.kind === "OBJECT" || flds[i].type.ofType.ofType.kind === "ENUM")) {
      //if (oTypes.indexOf(flds[i].type.ofType.ofType.name) === -1)
      oTypes.push({
        object: flds[i].type.ofType.ofType.name,
        field: flds[i].name
      });
    }

    if (flds[i].type.kind === "NON_NULL" && flds[i].type.ofType.kind === "SCALAR" && flds[i].type.ofType.name === "ID") {
      tType = true;
    }
  }

  console.log("CHECK OBJECT ", flds, oTypes);
  return {
    objectTypeList: oTypes,
    tableType: tType
  };
}

var FieldTxt = function FieldTxt(_ref) {
  var field = _ref.field,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? titleHeight : _ref$height,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      id = _ref.id,
      kind = _ref.kind,
      props = _objectWithoutProperties(_ref, ["field", "width", "height", "top", "id", "kind"]);

  //console.log("FLD PROPS", field);
  //let {id, width, height, top, field} = props;
  //const list = (field.type.kind === 'LIST');
  var rectCorner = titleHeight + top * titleHeight;

  if (kind === "ENUM") {
    /*
    return <g id={"FIELD::" + id + "::" + field.name}>
     <text textAnchor={"start"} x={10} y={rectCorner + (height / 2)} dominantBaseline="central"
        fontSize={"16px"} fill={"black"}>{field.name} 
    </text>
    </g>
    */
    // enum field is never refering other types...
    return /*#__PURE__*/_react["default"].createElement("g", {
      id: "FIELD::" + id + "::" + field.name
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      x: 0.5,
      y: rectCorner,
      width: width,
      height: height,
      stroke: "#548f9e",
      fill: fieldColor
    }), /*#__PURE__*/_react["default"].createElement("text", {
      textAnchor: "start",
      x: 10,
      y: rectCorner + height / 2,
      dominantBaseline: "central",
      fontSize: "16px",
      fill: "black"
    }, field.name));
  } else {
    var yPos = rectCorner + height / 2; //Field can refer to the object..

    return /*#__PURE__*/_react["default"].createElement("g", {
      id: "FIELD::" + id + "::" + field.name,
      onMouseOver: mouseOverEffect,
      onMouseOut: mouseOutEffect
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      x: 0.5,
      y: rectCorner,
      width: width,
      height: height,
      stroke: "#548f9e",
      fill: fieldColor
    }), /*#__PURE__*/_react["default"].createElement("text", {
      textAnchor: "start",
      x: 10,
      y: yPos,
      dominantBaseline: "central",
      fontSize: "16px",
      fill: "black"
    }, field.name), /*#__PURE__*/_react["default"].createElement("text", {
      textAnchor: "end",
      x: width - 15,
      y: yPos,
      dominantBaseline: "central",
      fontSize: "16px",
      fill: "black"
    }, field.list && "[", field.kind, field.list && "]", field.required && "!"));
    /*
    return <g id={"FIELD::" + id + "::" + groupField} onMouseOver={mouseOverEffect} onMouseOut={mouseOutEffect}>
     <rect x={0.5} y={rectCorner} width={width} height={height} stroke={"#548f9e"} fill={fieldColor}/>
     <text textAnchor={"start"} x={10} y={yPos} dominantBaseline="central"
           fontSize={"16px"} fill={"black"}>{field.name}</text>
     <text textAnchor={"end"} x={width - 15} y={yPos} dominantBaseline="middle"
           fontSize={"16px"} fill={"black"}>
         {list && "["}
         {field.type.kind === 'OBJECT' && <LinkTarget type={field.type} y={yPos}/>}
          {field.type.kind === 'LIST' && ['OBJECT','SCALAR','ENUM'].indexOf(field.type.ofType.kind)>-1 &&
         field.type.ofType.name }
         
         {field.type.kind === 'NON_NULL' && ['OBJECT','SCALAR','ENUM'].indexOf(field.type.ofType.kind)>-1 &&
         field.type.ofType.name }
         
         {field.type.kind === 'NON_NULL' && field.type.ofType.kind === 'LIST' && ['OBJECT','SCALAR','ENUM'].indexOf(field.type.ofType.ofType.kind)>-1 &&
          field.type.ofType.ofType.name }
          {(field.type.kind === 'SCALAR' || field.type.kind === 'ENUM') && field.type.name}
         {list && "]"}
         {nonNull && "!"}
     </text>
    </g>
    */
  }
};

function createSVG(schemaTables) {
  console.log("UPDATE CREATE SVG"); //let newState = { ...this.state };

  var types = {};
  var scalarTables = [];
  var refTables = {};
  var maxHeight = viewHeight * viewFactor - 2 * tblRowMargin;

  for (var i = 0; i < schemaTables.length; i++) {
    types[schemaTables[i].name] = {
      width: schemaTables[i].width,
      height: schemaTables[i].height,
      x: 0,
      y: 0,
      connections: schemaTables[i].connections,
      kind: schemaTables[i].kind
    };

    if (schemaTables[i].connections.length === 0) {
      scalarTables.push(schemaTables[i].name);
    } else {
      var _connections = schemaTables[i].connections.map(function (c) {
        return c.object;
      });

      refTables[schemaTables[i].name] = _toConsumableArray(new Set(_connections));
    }
  }
  /*
  console.log(schemaTables);
  console.log("REF TABLES ", refTables);
  console.log("TYPES ", types);
  console.log("SCALAR ", scalarTables);
  */


  var colHeight = 0;
  var colX = tblColMargin;
  var colY = tblRowMargin;
  var maxTypeWidth = 0;
  var refOrder = [];
  var tblOrder = [];
  var firstTbl = true;
  var colIndex = 0;

  if (Object.keys(refTables).length > 0) {
    Object.keys(refTables).forEach(function (t) {
      // if refers to itself ???
      for (var rf = 0; rf < refTables[t].length; rf++) {
        //console.log(refTables[t][rf])
        var refIndex = refOrder.indexOf(refTables[t][rf]); //console.log(refIndex);

        if (refIndex > -1) {
          //console.log('FOUND ',refOrder[refIndex]);
          refOrder.splice(refIndex, 0, t); //console.log('REF ORDER',refOrder);

          break;
        } else {
          if (refOrder.indexOf(t) === -1) {
            refOrder.push(t);
          }
        }
      }
    }); //console.log('ORDER ',refOrder);

    refOrder.forEach(function (rf, ri) {
      //console.log(rf);
      if (tblOrder.length === 0) {
        tblOrder[colIndex] = [rf]; // this line copied
        //tblOrder[colIndex + 1] = JSON.parse(JSON.stringify(refTables[rf]));

        var _refTables = refTables[rf].filter(function (rt) {
          return rt != rf;
        });

        if (_refTables.length > 0) {
          tblOrder[colIndex + 1] = JSON.parse(JSON.stringify(_refTables));
        }
      } else {
        //check if exists already...
        //console.log(">0", tblOrder, ri);
        if (typeof tblOrder[colIndex + 1] === "undefined" || tblOrder[colIndex + 1].indexOf(rf) === -1) {
          tblOrder[colIndex].push(rf);

          if (typeof tblOrder[colIndex + 1] !== "undefined") {
            refTables[rf].forEach(function (t) {
              if (tblOrder[colIndex + 1].indexOf(t) === -1) {
                tblOrder[colIndex + 1].push(t);
              }
            });
          }
        }
      }
    }); //console.log("ORDER ", refTables, refOrder, tblOrder);
    //START

    tblOrder[tblOrder.length - 1].forEach(function (c) {
      if (scalarTables.indexOf(c) > -1) {
        scalarTables.splice(scalarTables.indexOf(c), 1);
      }
    });

    if (scalarTables.length > 0) {
      tblOrder.push(JSON.parse(JSON.stringify(scalarTables)));
    } //console.log("TBL ORDER", tblOrder);
    // check col heights....


    colIndex = 0;
    var loop = true;

    while (loop) {
      //console.log('TBL ORDER',colIndex,tblOrder);
      colHeight = 0;
      firstTbl = true;

      for (var _i = 0; _i < tblOrder[colIndex].length; _i++) {
        var tt = tblOrder[colIndex][_i]; //console.log("TT", tt);

        colHeight += types[tt].height + tblRowMargin / 2;

        if (colHeight > maxHeight && !firstTbl) {
          //console.log('H ',colHeight);
          //console.log('SPLIT INDEX ',i);
          //splitCol=true;
          //loop=false;
          var splitCols = tblOrder[colIndex].splice(_i); //console.log('SPLIT ',splitCols,tblOrder[colIndex]);

          if (typeof tblOrder[colIndex + 1] === "undefined") {
            tblOrder[colIndex + 1] = JSON.parse(JSON.stringify(splitCols));
          } else {
            tblOrder[colIndex + 1] = tblOrder[colIndex + 1].concat(splitCols);
          }

          break;
        } else {
          firstTbl = false;
        } //console.log('HEIGHT ',colIndex,colHeight,maxHeight);

      }

      colIndex++;
      if (colIndex >= tblOrder.length) loop = false;
    } //console.log("TBL ORDER2", tblOrder);


    tblOrder.forEach(function (col) {
      //console.log("COL ", col);
      col.forEach(function (t) {
        maxTypeWidth = 0;
        colHeight += types[t].height + tblRowMargin / 2;

        if (maxTypeWidth < types[t].width) {
          maxTypeWidth = types[t].width;
        } //tblOrder.push({"name":t,"y":colY,"x":colX});


        types[t].x = colX;
        types[t].y = colY;
        colY += tblRowMargin / 2 + types[t].height;
      });
      colX += maxTypeWidth + tblColMargin;
      colY = tblRowMargin;
    }); //END
  }

  return types;
}

var Visualizations = /*#__PURE__*/function (_Component) {
  _inherits(Visualizations, _Component);

  var _super = _createSuper(Visualizations);

  function Visualizations(props) {
    var _this;

    _classCallCheck(this, Visualizations);

    _this = _super.call(this, props);
    _this.state = {
      scaled: false,
      schemaTables: [],
      loading: true
    };
    console.log("PROPS ", props);
    _this.getRectsInterval = undefined;
    var schemaJSON = props.schema,
        theme = props.theme;
    viewHeight = window.innerHeight - parseInt(props.theme.dashboard.header.height);
    viewWidth = window.innerWidth - parseInt(props.theme.dashboard.sidebar.left.width) - 24; //24===gap+shadow
    //console.log(schemaJson);

    var _schemaTypes = (0, _core.getTypes)(schemaJSON); //onsole.log(_schemaTypes);


    for (var t = 0; t < _schemaTypes.length; t++) {
      var typeIndex = (0, _core.getTypeIndex)(schemaJSON.data["__schema"].types, _schemaTypes[t]);
      var _schemaType = schemaJSON.data["__schema"].types[typeIndex];
      var typeKind = "";
      var _connections = [];

      if (typeof _schemaType.enumValues !== "undefined" && _schemaType.enumValues !== null) {
        typeKind = "ENUM";
      } else if (typeof _schemaType.fields !== "undefined" && _schemaType.fields !== null) {
        var _objectTypes = objectTypes(_schemaType.fields),
            objectTypeList = _objectTypes.objectTypeList,
            tableType = _objectTypes.tableType;

        typeKind = tableType ? "TABLE" : "OBJECT";
        console.log(_schemaType.name, objectTypeList);
        _connections = objectTypeList;
      }

      var _fields = [];

      if (typeKind === "ENUM") {
        _fields = _schemaType.enumValues.map(function (e) {
          return {
            name: e.name,
            description: e.description
          };
        });
      } else {
        _fields = _schemaType.fields.map(function (f) {
          if (f.type.ofType === null) {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.name,
              required: false,
              list: false
            };
          } else if (f.type.kind === "NON_NULL" && f.type.ofType.kind === "LIST") {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.ofType.ofType.name,
              required: true,
              list: true
            };
          } else if (f.type.kind === "LIST" && f.type.ofType.kind !== "NON_NULL") {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.ofType.name,
              required: false,
              list: true
            };
          } else if (f.type.kind === "NON_NULL" && f.type.ofType.kind !== "LIST") {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.ofType.name,
              required: true,
              list: false
            };
          }
        });
      }

      if (typeKind !== "") {
        _this.state.schemaTables.push(_objectSpread({}, _schemaType, {
          width: 0,
          height: 0,
          x: 250 * t + 150,
          y: 200,
          connections: _connections,
          kind: typeKind,
          _fields: _fields
        })); //console.log(this.state.schemaTables);

      }
    }

    if (_this.state.schemaTables.length > 10) {
      var _viewFactor = viewFactor;
      _viewFactor = Math.ceil(_this.state.schemaTables.length / 10);
      tblColMargin += _viewFactor * 70;
      tblRowMargin += _viewFactor * 40;
      viewFactor = Math.max(viewFactor._viewFactor);
    }

    return _this;
  }

  _createClass(Visualizations, [{
    key: "drawpaths",
    value: function drawpaths() {
      var schemaTables = this.state.schemaTables;
      var maxTypeX = tblColMargin;
      var maxTypeY = tblRowMargin;

      for (var ii = 0; ii < schemaTables.length; ii++) {
        if (schemaTables[ii].x + schemaTables[ii].width > maxTypeX) {
          maxTypeX = schemaTables[ii].x + schemaTables[ii].width;
        }

        if (schemaTables[ii].y + schemaTables[ii].height > maxTypeY) {
          maxTypeY = schemaTables[ii].y + schemaTables[ii].height;
        }
      }

      maxTypeX += tblColMargin;
      maxTypeY += tblRowMargin;

      if (maxTypeY > viewHeight) {
        //10
        var newSquareSize = Math.ceil(maxTypeX / viewHeight);
        console.log("MATRIX SQUARE ", newSquareSize);
        squareSize = newSquareSize * 10;
      }

      console.log("SIZE ", maxTypeX, viewWidth, maxTypeY, viewHeight);
      var maxY = parseInt(Math.max(viewHeight, maxTypeY) / squareSize);
      var maxX = parseInt(Math.max(viewWidth, maxTypeX) / squareSize);
      var matrix = new Array(maxY);

      for (var y = 0; y < maxY; y++) {
        matrix[y] = new Array(maxX);
      }

      var schemaTypes = {};

      for (var _ii = 0; _ii < schemaTables.length; _ii++) {
        var connections = schemaTables[_ii].connections;
        var objName = schemaTables[_ii].name;
        var objX = schemaTables[_ii].x;
        var objY = schemaTables[_ii].y;
        var objHeight = schemaTables[_ii].height;
        var objWidth = schemaTables[_ii].width;
        schemaTypes[objName] = {
          x: objX,
          y: objY,
          connections: connections
        };
        var bb = {
          ix: objX / squareSize - 1,
          iy: objY / squareSize - 1,
          ax: (objX + objWidth) / squareSize + 1,
          ay: (objY + objHeight) / squareSize + 1
        }; //console.log('BB' ,bb);

        for (var _y = 0; _y < maxY; _y++) {
          for (var x = 0; x < maxX; x++) {
            //if (bb.ix <= ((x + 1) * squareSize) && (x * squareSize) <= bb.ax && bb.iy <= ((y + 1) * squareSize) && (y * squareSize) <= bb.ay) {
            //if (bb.ix <= ( x * squareSize) && ( x * squareSize) <= bb.ax && bb.iy <= (y * squareSize) && ( y * squareSize) <= bb.ay) {
            if (bb.ix <= x && x <= bb.ax && bb.iy <= _y && _y <= bb.ay) {
              matrix[_y][x] = 1;
            } else {
              if (typeof matrix[_y][x] === "undefined") {
                matrix[_y][x] = 0;
              }
            }
          }
        }
      }

      console.log("MATRIX ", maxY, maxX);
      var newCircle = null;
      var svgGroup = document.getElementById("svg-group");
      /*
      
      
      for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
          if (matrix[y][x] === 1) {
            newCircle = svgCircle(x * squareSize, y * squareSize, 5, "green");
            svgGroup.appendChild(newCircle);
          }
        }
      }
      */

      console.log(schemaTypes);
      var paths = [];
      Object.keys(schemaTypes).forEach(function (tbl) {
        if (schemaTypes[tbl].connections.length > 0) {
          schemaTypes[tbl].connections.forEach(function (c) {
            console.log("FIELD::" + tbl + "::" + c.field);
            var dataFrom = "FIELD::" + tbl + "::" + c.field;
            var dataTo = "TYPE_TITLE::" + c.object;
            var cField = document.getElementById(dataFrom);
            console.log("SOURCE FIELD ", cField);

            if (cField !== null) {
              var fBox = cField.getBBox(); //console.log(fBox);
              // right edge

              var startX1 = schemaTypes[tbl].x + fBox.width;
              var startY1 = schemaTypes[tbl].y + fBox.y + fBox.height / 2; // left edge
              //const startX2=startX1;
              //const startY2=startY1;

              var startX2 = schemaTypes[tbl].x;
              var startY2 = schemaTypes[tbl].y + fBox.y + fBox.height / 2; //const startX=schemaTypes[tbl].x + fBox.width;
              //const startY=schemaTypes[tbl].y + fBox.y+(fBox.height/2);

              var tField = document.getElementById(dataTo); //console.log('TARGET ',tField);

              var tBox = tField.getBBox(); //console.log(tBox);
              // left edge

              var endX1 = schemaTypes[c.object].x;
              var endY1 = schemaTypes[c.object].y + tBox.height / 2; // right edge

              var endX2 = schemaTypes[c.object].x + tBox.width;
              var endY2 = schemaTypes[c.object].y + tBox.height / 2; // top edge

              var endX3 = schemaTypes[c.object].x + tBox.width / 2;
              var endY3 = schemaTypes[c.object].y;
              var dPoints = [[endX1, endY1], [endX2, endY2], [endX3, endY3]]; //const dPoints=[[endX1,endY1]]
              // {"distance":d,"pointIndex":pointIndex}

              var c1 = minPointDistance([startX1, startY1], dPoints);
              var c2 = minPointDistance([startX2, startY2], dPoints);
              var startX = startX1;
              var startY = startY1;
              var endX = endX1;
              var endY = endY1;
              var rightEdge = true;
              var targetEdge = 0;

              if (c1.distance > c2.distance) {
                startX = startX2;
                startY = startY2;
                endX = dPoints[c2.pointIndex][0];
                endY = dPoints[c2.pointIndex][1];
                targetEdge = c2.pointIndex;
                rightEdge = false;
              } else {
                //if (c1.pointIndex!==c2.pointIndex || c1.pointIndex!==0) {
                endX = dPoints[c1.pointIndex][0];
                endY = dPoints[c1.pointIndex][1];
                targetEdge = c1.pointIndex;
              }

              newCircle = svgCircle(startX, startY);
              svgGroup.appendChild(newCircle);
              var startPoint = [startX, startY];
              var endPoint = [endX, endY]; // if both are on top of each other add some extra

              if (startPoint[0] === endPoint[0]) {
                //console.log('POINTS HAVE SAME X');
                if (rightEdge) {// startPoint[0] += 30;
                } else {//console.log('ADD MARGIN ',startPoint[0])
                    // startPoint[0] -= (squareSize*1);
                  }
              } // if both are next of each other add some extra margin


              if (startPoint[1] === endPoint[1]) {
                if (rightEdge) {// startPoint[1] -= 20;
                } else {// startPoint[1] += 20;
                  }
              }

              var x1 = 0;
              var y1 = 0;
              var x2 = 0;
              var y2 = 0; //source.....

              if (rightEdge) {
                x1 = parseInt(startPoint[0] / squareSize) + 2;
                y1 = parseInt(startPoint[1] / squareSize);
              } else {
                x1 = parseInt(startPoint[0] / squareSize) - 2;
                y1 = parseInt(startPoint[1] / squareSize);
              } //left


              if (targetEdge === 0) {
                x2 = parseInt(endPoint[0] / squareSize) - 2;
                y2 = parseInt(endPoint[1] / squareSize);

                if (rightEdge) {
                  if (y2 < y1) {
                    if (y1 - y2 > 2) {
                      y2 += 1;
                      y1 -= 1;
                    }
                  } else {
                    if (y2 - y1 > 2) {
                      y2 -= 1;
                      y1 += 1;
                    }
                  }
                } else {
                  if (y2 < y1) {
                    if (y1 - y2 > 2) {
                      y2 += 1;
                      y1 -= 1;
                    }
                  } else {
                    if (y2 - y1 > 2) {
                      y2 -= 1;
                      y1 += 1;
                    }
                  }
                }
              } //right


              if (targetEdge === 1) {
                x2 = parseInt(endPoint[0] / squareSize) + 2;
                y2 = parseInt(endPoint[1] / squareSize);

                if (rightEdge) {
                  if (y2 < y1) {
                    if (y1 - y2 > 2) {
                      y2 += 1;
                      y1 -= 1;
                    }
                  } else {
                    if (y2 - y1 > 2) {
                      y2 -= 1;
                      y1 += 1;
                    }
                  }
                } else {
                  if (y2 < y1) {
                    if (y1 - y2 > 2) {
                      y2 += 1;
                      y1 -= 1;
                    }
                  } else {
                    if (y2 - y1 > 2) {
                      y2 -= 1;
                      y1 += 1;
                    }
                  }
                } //console.log(x2,y2);

              } //top


              if (targetEdge === 2) {
                x2 = parseInt(endPoint[0] / squareSize);
                y2 = parseInt(endPoint[1] / squareSize);

                if (rightEdge) {
                  if (y2 < y1) {
                    if (y1 - y2 > 2) {
                      y2 += 1;
                      y1 -= 1;
                    }
                  } else {
                    if (y2 - y1 > 2) {
                      y2 -= 1;
                      y1 += 1;
                    }
                  }
                }
              } //console.log(x1, y1, x2, y2);


              paths.push({
                dataFrom: dataFrom,
                dataTo: dataTo,
                start: {
                  x: startX,
                  y: startY
                },
                end: {
                  x: endX,
                  y: endY
                },
                path: {
                  x1: x1,
                  y1: y1,
                  x2: x2,
                  y2: y2
                }
              });
            }
          });
        }
      });
      console.log(paths);
      var grid = new PF.Grid(matrix);
      var finder = new PF.BiBestFirstFinder({
        allowDiagonal: false,
        dontCrossCorners: false,
        heuristic: PF.Heuristic.manhattan
      });
      paths.forEach(function (p, pi) {
        var gridBackup = grid.clone(); // set start and end walkable
        //grid.setWalkableAt(0, 1, true);

        console.log(pi, p);
        var path = finder.findPath(p.path.x1, p.path.y1, p.path.x2, p.path.y2, gridBackup); //console.log(path);

        if (path.length > 0) {
          var points = [p.start]; //console.log(newPath.length);

          console.log("PATH POINTS ", path);
          var newPath = PF.Util.smoothenPath(gridBackup, path);
          console.log("NEW PATH ", newPath);

          if (newPath.length > 2) {
            for (var i = 1; i < newPath.length - 1; i++) {
              points.push({
                x: newPath[i][0] * squareSize,
                y: newPath[i][1] * squareSize
              });
            }
          } else {
            for (var _i2 = 0; _i2 < newPath.length; _i2++) {
              points.push({
                x: newPath[_i2][0] * squareSize,
                y: newPath[_i2][1] * squareSize
              });
            }
          }

          points.push(p.end);
          console.log("FINAL POINTS ", pi, points);
          svgGroup.appendChild(svgPath(points, p.dataFrom, p.dataTo)); // let newPath = PF.Util.smoothenPath(gridBackup, path);
          // svg.appendChild(svgPath(newPath, squareSize));
        } else {
          console.log("NO PATH ", pi);
        }
      }); //return {schemaTypes,matrix};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("DID MOUNT ", this.state.loading, this.state.scaled);
      /*
      const svg = html`<svg style="border:solid 1px red;">
      <g name="content">
        <text>${DOM.text(text)}</text>
      </g>
      </svg>`;
      // Add the SVG element to the DOM so we can determine its size.
      document.body.appendChild(svg);
      // Computing the bounding box of the content.
      const box = svg.querySelector("[name=content]").getBBox();
      // Remove the SVG element from the DOM.
      svg.remove();
      */

      /*
      const svg = (
        <svg
          style={{
            visibility: "visible",
            position: "absolute",
            top: 0,
            left: 300,
          }}
          id="svg-test2"
          width={"100%"}
          height={"100%"}
          viewBox={
            "0 0 " + viewWidth * viewFactor + " " + viewHeight * viewFactor
          }
        >
          {this.state.schemaTables.map((t, i) => (
            <g id={"TEST_TITLES::" + t.name} key={"g-" + i}>
              <text fontSize={"18px"} y={50}>
                {t.name}
              </text>
            </g>
          ))}
        </svg>
      );
      document.body.appendChild(svg);
      const box = svg.querySelector("#svg-test2").getBBox();
      console.log("BOX ", box);
      svg.remove();
      */

      this.getRectsInterval = setInterval(function () {
        //const svgGroup = document.getElementById("svg-group");
        var testData = document.querySelectorAll("#svg-group g");
        console.log(testData);

        if (testData.length > 0) {
          //"TEST_TITLES::Newtypetbl"
          clearInterval(_this2.getRectsInterval);
          var _types = {}; //titleHeight = testData[0].getBBox().height;

          testData.forEach(function (t) {
            if (t.id.startsWith("TYPE_TITLE")) {
              var _type = t.id.split("::")[1];

              if (typeof _types[_type] === "undefined") {
                _types[_type] = {
                  width: 0
                };
              }

              _types[_type].width = Math.max(t.getBBox().width, _types[_type].width);
              titleHeight = t.getBBox().height;
            }

            if (t.id.startsWith("TYPE_FIELDS::")) {
              var _type2 = t.id.split("::")[1];

              if (typeof _types[_type2] === "undefined") {
                _types[_type2] = {
                  width: 0
                };
              }

              _types[_type2].width = Math.max(t.getBBox().width, _types[_type2].width);
            }
          });
          console.log(_types);

          var newState = _objectSpread({}, _this2.state);

          var schemaTables = newState.schemaTables;

          for (var i = 0; i < schemaTables.length; i++) {
            var _tbl = schemaTables[i].name;
            /*
            let maxWidth = 0;
            //return { name: e.name, description: e.description };
            for (let f = 0; f < schemaTables[i]._fields; f++) {
              maxWidth = Math.max(
                maxWidth,
                _types[_tbl][schemaTables[i]._fields[f].name].width
              );
            }
            maxWidth = Math.ceil(Math.max(maxWidth, _types[_tbl].width));
            schemaTables[i].width = maxWidth;
            */

            schemaTables[i].width = Math.ceil(_types[_tbl].width) * 1.3;
            schemaTables[i].height = (schemaTables[i]._fields.length + 1) * titleHeight;
          }

          var orderedTypes = createSVG(schemaTables);
          console.log("NEW ORDER ", orderedTypes);

          for (var _i3 = 0; _i3 < schemaTables.length; _i3++) {
            var _tbl2 = schemaTables[_i3].name;
            schemaTables[_i3].x = Math.ceil(orderedTypes[_tbl2].x);
            schemaTables[_i3].y = Math.ceil(orderedTypes[_tbl2].y);
          }

          newState.schemaTables = schemaTables;

          _this2.setState(newState);

          _this2.drawpaths();
          /*
          const {schemaTypes,matrix}= this.drawpaths();
          console.log('')
          */

          /*
          let newCircle = null;
          const svgGroup=document.getElementById('svg-group');
          
          for (let y = 0; y < maxY; y++) {
            for (let x = 0; x < maxX; x++) {
              if (matrix[y][x]===1) {
                newCircle = svgCircle(x*squareSize, y*squareSize,5,'green');
                svgGroup.appendChild(newCircle);
              }
            }
          }
          */
          //console.log('SCHEMA TYPES ',schemaTypes);


          var panZoom = SvgPanZoom("#svg-container", {
            viewportSelector: "#svg-group",
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true,
            minZoom: 0.1,
            eventsListenerElement: document.querySelector("#svg-container #svg-group")
          });
          panZoom.resize(); // update SVG cached size and controls positions

          panZoom.updateBBox(); // Update viewport bounding box

          panZoom.fit();
          panZoom.zoomBy(0.8);
          panZoom.center();
          /*
          this.state.schemaTables.push({
            ..._schemaType,
            width: 0,
            height: 0,
            x: 250 * t + 150,
            y: 200,
            connections: _connections,
            kind: typeKind,
            _fields: _fields,
          });
           this.setState(newState);  
          */
        }
      }, 100);
      /*
      // this bbox is all 0 ???? 
      const testData = document.querySelectorAll("#svg-test g");
      console.log(testData);
      if (testData.length > 0) {
        console.log(testData[0].getBBox());
      }
      */
      //this.setState({ loading: false });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.getRectsInterval);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("DID UPDATE ", this.state.loading, this.state.scaled);
      var svgGroup = document.getElementById("svg-group");

      if (!this.state.loading && this.state.scaled && svgGroup !== null) {
        console.log("GROUP", svgGroup.getBBox(), svgGroup.getBoundingClientRect());
        console.log(this.text.getBBox());
        console.log("UPDATE ", viewWidth, viewHeight, document.querySelector(".viewport").width, document.querySelector("#viewport").offsetWidth);

        for (var i = 0; i < this.state.schemaTables.length; i++) {
          /*
          console.log(
            "UPDATE",
            Math.floor(
              document
                .getElementById("TEST_TITLES::" + this.state.schemaTables[i].name)
                .getBBox().width
            )
          );
          */
          console.log("UPDATE-1", document.getElementById("TEST_TITLES::" + this.state.schemaTables[i].name));
        }
      }

      if (!this.state.loading && !this.state.scaled) {
        console.log("UPDATE ", this.state);

        for (var _i4 = 0; _i4 < this.state.schemaTables.length; _i4++) {
          /*
          console.log(
            "UPDATE",
            Math.floor(
              document
                .getElementById("TEST_TITLES::" + this.state.schemaTables[i].name)
                .getBBox().width
            )
          );
          */
          console.log("UPDATE-2", document.getElementById("TEST_TITLES::" + this.state.schemaTables[_i4].name).getBBox());
        } //this.setState({ scaled: true });

      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      //ref={this.InputRef}
      var _this$state = this.state,
          scaled = _this$state.scaled,
          schemaTables = _this$state.schemaTables,
          loading = _this$state.loading;
      /*
      return <g key={'g-' + i} id={"TYPE:::" + t.name + '-' + i} transform={"translate(" + t.x + "," + t.y + ")"} >
      <g id={"TYPE_TITLE::" + t.name} onClick={typeClick} data-title={"TYPE_TITLE::" + t.name}>
          <rect x={0} width={t.width+1} height={titleHeight} className={"type-title "+t.kind.toLowerCase()}/>
          <TitleTxt width={t.width/2} height={titleHeight} id={"TYPE_TITLE::TEXT::" + t.name}>{t.name}</TitleTxt>
      </g>
      <g id={"TYPE_FIELDS::"+t.name}>
      {typeof t.enumValues!=='undefined' && t.enumValues!==null && t.enumValues.map((fld, index) =>
            <FieldTxt  id={t.name} width={t.width} height={titleHeight} top={index} key={"f-" + index}
                      field={fld} kind={"ENUM"}/>
        )}
      {typeof t.fields!=='undefined' && t.fields!==null && t.fields.map((fld, index) =>
          <FieldTxt id={t.name} width={t.width} height={titleHeight} top={index} key={"f-" + index}
                    field={fld} kind={"OBJECT"}/>
      )}
      </g>
      const TitleTxt = (props) => {
      const width=props.width||0;
      return <text  fontSize={"18px"} x={width} y={props.height / 2}  dominantBaseline="central"
      textAnchor="middle" fill={"white"} {...props}>{props.children}</text>
      }
      */

      console.log(schemaTables);
      var tables = [];

      if (!scaled) {
        tables = schemaTables.map(function (t, i) {
          return /*#__PURE__*/_react["default"].createElement("g", {
            key: "g-" + i,
            id: "TYPE:::" + t.name + "-" + i,
            transform: "translate(" + t.x + "," + t.y + ")"
          }, /*#__PURE__*/_react["default"].createElement("g", {
            id: "TYPE_TITLE::" + t.name,
            "data-title": "TYPE_TITLE::" + t.name,
            onClick: typeClick
          }, /*#__PURE__*/_react["default"].createElement("rect", {
            x: 0,
            width: t.width + 1,
            height: titleHeight,
            className: "type-title " + t.kind.toLowerCase()
          }), /*#__PURE__*/_react["default"].createElement("text", {
            id: "TYPE_TITLE::TEXT::" + t.name,
            fontSize: "18px",
            x: t.width / 2,
            y: titleHeight / 2,
            dominantBaseline: "central",
            textAnchor: "middle",
            fill: "white"
          }, t.name)), /*#__PURE__*/_react["default"].createElement("g", {
            id: "TYPE_FIELDS::" + t.name
          }, t._fields.map(function (fld, index) {
            return /*#__PURE__*/_react["default"].createElement(FieldTxt, {
              id: t.name,
              top: index,
              width: t.width,
              key: "f-" + index,
              kind: t.kind,
              field: fld
            });
          })));
        });
      } else {
        tables.push( /*#__PURE__*/_react["default"].createElement("text", {
          key: "k-" + schemaTables.length,
          fontSize: "18px",
          y: 250,
          ref: function ref(t) {
            _this3.text = t;
          }
        }, "TESTII"));
      } // in case there is  pt/px issue
      ///1pt ≅ 1.3333px or user units (1px = 0.75pt)


      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "viewport",
        className: "viewport",
        style: {
          backgroundColor: "beige",
          minHeight: "100%"
        },
        onClick: typeClick
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, scaled && /*#__PURE__*/_react["default"].createElement("svg", {
        style: {
          visibility: "visible",
          position: "absolute",
          top: 0,
          left: 300
        },
        id: "svg-test",
        width: "100%",
        height: viewHeight,
        viewBox: "0 0 " + viewWidth * viewFactor + " " + viewHeight * viewFactor
      }, tables), !scaled && /*#__PURE__*/_react["default"].createElement(SvgPrimitive, {
        width: "100%",
        height: viewHeight,
        id: "svg-container",
        viewBox: "0 0 " + viewWidth * viewFactor + " " + viewHeight * viewFactor
      }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("marker", {
        id: "arrow",
        viewBox: "0 0 10 10",
        refX: "5",
        refY: "5",
        markerWidth: "6",
        markerHeight: "6",
        orient: "auto-start-reverse"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M 0 0 L 10 5 L 0 10 z"
      })), /*#__PURE__*/_react["default"].createElement("marker", {
        id: "dot",
        viewBox: "0 0 10 10",
        refX: "5",
        refY: "5",
        markerWidth: "5",
        markerHeight: "5"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "5",
        cy: "5",
        r: "5",
        fill: "red"
      })), /*#__PURE__*/_react["default"].createElement("style", {
        id: "svg-path-styles",
        type: "text/css"
      }, pathStyle)), /*#__PURE__*/_react["default"].createElement("g", {
        id: "svg-group",
        transform: "translate(0,0)"
      }, tables))));
    }
  }]);

  return Visualizations;
}(_react.Component);

Visualizations.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "drawpaths",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "Visualizations"
};
var _default = Visualizations;
/*
import React from "react";
import { Text, Box } from "@blend-ui/core";

const Visualizations = ({ ...props }) => {
  console.log("Visualizations ", props);

  return (
    <Box>
      <Text>Visualizations...</Text>
    </Box>
  );
};

export default Visualizations;

*/

exports["default"] = _default;