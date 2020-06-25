import React, { Component } from "react";
//import { Box } from "@blend-ui/core";
//import { getTypes, getTypeIndex } from "../../lib/tools";
import { getTypes, getTypeIndex } from "@builder-plugins/core";
import styled, { css } from "styled-components";

//import schemaJSON from "../../schema-1-54.json";

const SvgPanZoom = require("svg-pan-zoom");
const PF = require("pathfinding");

let titleHeight = 42;
let tblColMargin = 150;
let tblRowMargin = 200;
let squareSize = 10;
let viewFactor = 1.5;
let viewWidth = 0;
let viewHeight = 0;

const fieldColor = "#f6f8f8";
//const enumColor='#f6f8f8';
const typeColor = "#f06f20";
const tableColor = "darkgreen";
const enumColor = "#049";

function typeClick(event) {
  //console.log('MOUSE CLICK ',event);
  const elemID = event.currentTarget.id;
  if (elemID.startsWith("TYPE_TITLE")) {
    //event.preventDefault();
    const currentPaths = document.querySelectorAll(".line-path.field-hover");
    for (let pp = 0; pp < currentPaths.length; pp++) {
      currentPaths[pp].classList.remove("field-hover");
    }

    const paths = document.querySelectorAll(
      ".line-path[data-to='" + elemID + "']"
    );
    for (let p = 0; p < paths.length; p++) {
      paths[p].classList.add("field-hover");
    }
    const currentTitles = document.querySelectorAll(".type-title.selected");
    for (let pt = 0; pt < currentTitles.length; pt++) {
      currentTitles[pt].classList.remove("selected");
    }
    //const queryID='#'+elemID.replace(/\:/g,'\\\\:')
    //console.log(queryID+' .type-title');
    //console.log(document.querySelectorAll(queryID))
    const titleRect = document.querySelector("[data-title='" + elemID + "']");

    titleRect.querySelectorAll(".type-title")[0].classList.add("selected");
    //titleRect[0].classList.add('selected')

    event.stopPropagation();
  } else {
    //console.log('OUTSIDE ',elemID);
    const paths = document.querySelectorAll(".line-path.field-hover");
    for (let p = 0; p < paths.length; p++) {
      paths[p].classList.remove("field-hover");
    }
    const currentTitles = document.querySelectorAll(".type-title.selected");
    for (let pt = 0; pt < currentTitles.length; pt++) {
      currentTitles[pt].classList.remove("selected");
    }
  }
}
function mouseOverEffect(elm) {
  //console.log('MOUSE OVER ',elm,elm.target.id);
  //console.log('MOUSE OVER TARGET',elm.target);
  //console.log('MOUSE OVER CURR ARGET',elm.currentTarget.id);
  //console.log('MOUSE OVER REL TARGET',elm.relatedTarget);
  //.field-hover
  const elemID = elm.currentTarget.id;
  if (elemID.startsWith("FIELD")) {
    //var container = document.querySelector("#userlist");
    //var matches = container.querySelectorAll("li[data-active='1']");
    const paths = document.querySelectorAll(
      ".line-path[data-from='" + elemID + "']"
    );
    for (let p = 0; p < paths.length; p++) {
      paths[p].classList.add("field-hover");
    }
  }
}
function mouseOutEffect(elm) {
  //console.log('MOUSE OUT ',elm,elm.currentTarget.id);
  const elemID = elm.currentTarget.id;
  if (elemID.startsWith("FIELD")) {
    //var container = document.querySelector("#userlist");
    //var matches = container.querySelectorAll("li[data-active='1']");
    const paths = document.querySelectorAll(
      ".line-path[data-from='" + elemID + "']"
    );
    for (let p = 0; p < paths.length; p++) {
      paths[p].classList.remove("field-hover");
    }
  }
}

function svgCircle(x, y, r = 10, fill = "red") {
  var newElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  newElement.setAttribute("fill", fill); //Set  data
  newElement.setAttribute("cx", x); //Set  data
  newElement.setAttribute("cy", y); //Set  data
  newElement.setAttribute("r", r); //Set  data
  return newElement;
}

function svgPath(points, dataFrom, dataTo) {
  let groupElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  groupElement.classList.add("line-path");
  groupElement.dataset.from = dataFrom;
  groupElement.dataset.to = dataTo;

  let newElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
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

const isCollinear = (p1, p2, p3) => {
  return (p1.y - p2.y) * (p1.x - p3.x) === (p1.y - p3.y) * (p1.x - p2.x);
};

const moveTo = (b, a, r) => {
  const vector = { x: b.x - a.x, y: b.y - a.y };
  const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  const unitVector = { x: vector.x / length, y: vector.y / length };
  return { x: a.x + unitVector.x * r, y: a.y + unitVector.y * r };
};

// smooth polyline
const PathLine = (points, r) => {
  const path = points
    .slice(1)
    .reduce(
      (acc, p, i, points) => {
        let next = points[i + 1];
        let prev = acc[acc.length - 1];

        if (next && !isCollinear(prev.point, p, next)) {
          let before = moveTo(prev.point, p, r);
          let after = moveTo(next, p, r);
          return acc.concat({
            point: p,
            s: `L ${before.x} ${before.y} S ${p.x} ${p.y} ${after.x} ${after.y} `,
          });
        } else {
          return acc.concat({
            point: p,
            s: `L ${p.x} ${p.y} `,
          });
        }
      },
      [
        {
          point: points[0],
          s: `M ${points[0].x} ${points[0].y} `,
        },
      ]
    )
    .map((p) => p.s)
    .join("");
  return path;
};

function minPointDistance(origin, points) {
  let d = 0;
  const x1 = origin[0];
  const y1 = origin[1];
  let pointIndex = 0;

  for (let i = 0; i < points.length; i++) {
    const x2 = points[i][0];
    const y2 = points[i][1];
    const a = x1 - x2;
    const b = y1 - y2;
    const distance = Math.hypot(a, b);
    if (distance < d || d === 0) {
      d = distance;
      pointIndex = i;
      //console.log('D =>',d,pointIndex);
    }
  }

  //console.log('D ',d,pointIndex);
  /*
  var a = x1 - x2;
var b = y1 - y2;

var c = Math.sqrt( a*a + b*b );

// c is the distance
  you can shorten var c = Math.sqrt( aa + bb ); to var c = Math.hypot(a,b); 
  */
  return { distance: d, pointIndex: pointIndex };
}

const pathStyle = css`
  #svg-group > g.line-path {
    stroke: black;
    stroke-width: 3px;
    pointer-events: stroke;
    cursor: pointer;
    fill: transparent;
  }
  #svg-group > g.line-path:hover {
    stroke: #da4567;
    stroke-width: 6px;
  }
  #svg-group > g.line-path.field-hover {
    stroke: #da4567;
    stroke-width: 6px;
  }
  .type-title.table {
    fill: ${tableColor};
  }
  .type-title.object {
    fill: ${typeColor};
  }
  .type-title.enum {
    fill: ${enumColor};
  }
  .type-title.selected {
    fill: red;
  }
  .type-title.lighten {
    -webkit-filter: brightness(85%);
    filter: brightness(85%);
  }
`;
const svgStyles = css`
  overflow: hidden;
`;

const SvgPrimitive = styled.svg.attrs((props) => ({
  /*width:props.width,
  xmlns:"http://www.w3.org/2000/svg",
  xmlnsXlink:"http://www.w3.org/1999/xlink",
  xmlnsEv:"http://www.w3.org/2001/xml-events"
  */
}))`
  /*    */
  ${svgStyles}
`;

function objectTypes(flds) {
  let oTypes = [];
  let tType = false;
  for (let i = 0; i < flds.length; i++) {
    if (flds[i].type.kind === "OBJECT" || flds[i].type.kind === "ENUM") {
      //if (oTypes.indexOf(flds[i].type.name) === -1)
      oTypes.push({ object: flds[i].type.name, field: flds[i].name });
    }
    if (
      ["LIST", "NON_NULL"].indexOf(flds[i].type.kind) > -1 &&
      (flds[i].type.ofType.kind === "OBJECT" ||
        flds[i].type.ofType.kind === "ENUM")
    ) {
      //if (oTypes.indexOf(flds[i].type.ofType.name) === -1)
      oTypes.push({ object: flds[i].type.ofType.name, field: flds[i].name });
    }
    if (
      flds[i].type.kind === "NON_NULL" &&
      flds[i].type.ofType.kind === "LIST" &&
      (flds[i].type.ofType.ofType.kind === "OBJECT" ||
        flds[i].type.ofType.ofType.kind === "ENUM")
    ) {
      //if (oTypes.indexOf(flds[i].type.ofType.ofType.name) === -1)
      oTypes.push({
        object: flds[i].type.ofType.ofType.name,
        field: flds[i].name,
      });
    }
    if (
      flds[i].type.kind === "NON_NULL" &&
      flds[i].type.ofType.kind === "SCALAR" &&
      flds[i].type.ofType.name === "ID"
    ) {
      tType = true;
    }
  }
  console.log("CHECK OBJECT ", flds, oTypes);
  return { objectTypeList: oTypes, tableType: tType };
}
const FieldTxt = ({
  field,
  width = 0,
  height = titleHeight,
  top = 0,
  id,
  kind,
  ...props
}) => {
  //console.log("FLD PROPS", field);
  //let {id, width, height, top, field} = props;
  //const list = (field.type.kind === 'LIST');
  const rectCorner = titleHeight + top * titleHeight;
  if (kind === "ENUM") {
    /*
  return <g id={"FIELD::" + id + "::" + field.name}>
  
  <text textAnchor={"start"} x={10} y={rectCorner + (height / 2)} dominantBaseline="central"
        fontSize={"16px"} fill={"black"}>{field.name} 
  </text>
  </g>
*/
    // enum field is never refering other types...
    return (
      <g id={"FIELD::" + id + "::" + field.name}>
        <rect
          x={0.5}
          y={rectCorner}
          width={width}
          height={height}
          stroke={"#548f9e"}
          fill={fieldColor}
        />
        <text
          textAnchor={"start"}
          x={10}
          y={rectCorner + height / 2}
          dominantBaseline="central"
          fontSize={"16px"}
          fill={"black"}
        >
          {field.name}
        </text>
      </g>
    );
  } else {
    const yPos = rectCorner + height / 2;
    //Field can refer to the object..
    return (
      <g
        id={"FIELD::" + id + "::" + field.name}
        onMouseOver={mouseOverEffect}
        onMouseOut={mouseOutEffect}
      >
        <rect
          x={0.5}
          y={rectCorner}
          width={width}
          height={height}
          stroke={"#548f9e"}
          fill={fieldColor}
        />
        <text
          textAnchor={"start"}
          x={10}
          y={yPos}
          dominantBaseline="central"
          fontSize={"16px"}
          fill={"black"}
        >
          {field.name}
        </text>

        <text
          textAnchor={"end"}
          x={width - 15}
          y={yPos}
          dominantBaseline="central"
          fontSize={"16px"}
          fill={"black"}
        >
          {field.list && "["}
          {field.kind}
          {field.list && "]"}
          {field.required && "!"}
        </text>
      </g>
    );
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
  console.log("UPDATE CREATE SVG");
  //let newState = { ...this.state };
  let types = {};
  let scalarTables = [];
  let refTables = {};

  const maxHeight = viewHeight * viewFactor - 2 * tblRowMargin;

  for (let i = 0; i < schemaTables.length; i++) {
    types[schemaTables[i].name] = {
      width: schemaTables[i].width,
      height: schemaTables[i].height,
      x: 0,
      y: 0,
      connections: schemaTables[i].connections,
      kind: schemaTables[i].kind,
    };
    if (schemaTables[i].connections.length === 0) {
      scalarTables.push(schemaTables[i].name);
    } else {
      let _connections = schemaTables[i].connections.map((c) => {
        return c.object;
      });
      refTables[schemaTables[i].name] = [...new Set(_connections)];
    }
  }
  /*
  console.log(schemaTables);
  console.log("REF TABLES ", refTables);
  console.log("TYPES ", types);
  console.log("SCALAR ", scalarTables);
*/
  let colHeight = 0;
  let colX = tblColMargin;
  let colY = tblRowMargin;
  let maxTypeWidth = 0;
  let refOrder = [];
  let tblOrder = [];
  let firstTbl = true;
  let colIndex = 0;

  if (Object.keys(refTables).length > 0) {
    Object.keys(refTables).forEach((t) => {
      // if refers to itself ???

      for (let rf = 0; rf < refTables[t].length; rf++) {
        //console.log(refTables[t][rf])
        const refIndex = refOrder.indexOf(refTables[t][rf]);
        //console.log(refIndex);
        if (refIndex > -1) {
          //console.log('FOUND ',refOrder[refIndex]);
          refOrder.splice(refIndex, 0, t);
          //console.log('REF ORDER',refOrder);
          break;
        } else {
          if (refOrder.indexOf(t) === -1) {
            refOrder.push(t);
          }
        }
      }
    });

    //console.log('ORDER ',refOrder);
    refOrder.forEach((rf, ri) => {
      //console.log(rf);
      if (tblOrder.length === 0) {
        tblOrder[colIndex] = [rf];
        // this line copied
        //tblOrder[colIndex + 1] = JSON.parse(JSON.stringify(refTables[rf]));
        const _refTables = refTables[rf].filter((rt) => {
          return rt != rf;
        });
        if (_refTables.length > 0) {
          tblOrder[colIndex + 1] = JSON.parse(JSON.stringify(_refTables));
        }
      } else {
        //check if exists already...
        //console.log(">0", tblOrder, ri);
        if (
          typeof tblOrder[colIndex + 1] === "undefined" ||
          tblOrder[colIndex + 1].indexOf(rf) === -1
        ) {
          tblOrder[colIndex].push(rf);
          if (typeof tblOrder[colIndex + 1] !== "undefined") {
            refTables[rf].forEach((t) => {
              if (tblOrder[colIndex + 1].indexOf(t) === -1) {
                tblOrder[colIndex + 1].push(t);
              }
            });
          }
        }
      }
    });

    //console.log("ORDER ", refTables, refOrder, tblOrder);

    //START

    tblOrder[tblOrder.length - 1].forEach((c) => {
      if (scalarTables.indexOf(c) > -1) {
        scalarTables.splice(scalarTables.indexOf(c), 1);
      }
    });
    if (scalarTables.length > 0) {
      tblOrder.push(JSON.parse(JSON.stringify(scalarTables)));
    }

    //console.log("TBL ORDER", tblOrder);

    // check col heights....
    colIndex = 0;
    let loop = true;
    while (loop) {
      //console.log('TBL ORDER',colIndex,tblOrder);
      colHeight = 0;

      firstTbl = true;

      for (let i = 0; i < tblOrder[colIndex].length; i++) {
        const tt = tblOrder[colIndex][i];
        //console.log("TT", tt);

        colHeight += types[tt].height + tblRowMargin / 2;
        if (colHeight > maxHeight && !firstTbl) {
          //console.log('H ',colHeight);
          //console.log('SPLIT INDEX ',i);
          //splitCol=true;
          //loop=false;
          const splitCols = tblOrder[colIndex].splice(i);
          //console.log('SPLIT ',splitCols,tblOrder[colIndex]);
          if (typeof tblOrder[colIndex + 1] === "undefined") {
            tblOrder[colIndex + 1] = JSON.parse(JSON.stringify(splitCols));
          } else {
            tblOrder[colIndex + 1] = tblOrder[colIndex + 1].concat(splitCols);
          }

          break;
        } else {
          firstTbl = false;
        }
        //console.log('HEIGHT ',colIndex,colHeight,maxHeight);
      }
      colIndex++;
      if (colIndex >= tblOrder.length) loop = false;
    }
    //console.log("TBL ORDER2", tblOrder);

    tblOrder.forEach((col) => {
      //console.log("COL ", col);

      col.forEach((t) => {
        maxTypeWidth = 0;
        colHeight += types[t].height + tblRowMargin / 2;
        if (maxTypeWidth < types[t].width) {
          maxTypeWidth = types[t].width;
        }

        //tblOrder.push({"name":t,"y":colY,"x":colX});
        types[t].x = colX;
        types[t].y = colY;
        colY += tblRowMargin / 2 + types[t].height;
      });
      colX += maxTypeWidth + tblColMargin;
      colY = tblRowMargin;
    });

    //END
  }

  return types;
}

class Visualizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaled: false,
      schemaTables: [],
      loading: true,
    };
    console.log("PROPS ", props);
    this.getRectsInterval = undefined;
    const { schema: schemaJSON, theme } = props;

    viewHeight =
      window.innerHeight - parseInt(props.theme.dashboard.header.height) - 8;
    viewWidth =
      window.innerWidth -
      parseInt(props.theme.dashboard.sidebar.left.width) -
      24; //24===gap+shadow
    //console.log(schemaJson);
    //console.log("BEFORE GET TYPES ", typeof schemaJSON);
    const _schemaTypes = getTypes(schemaJSON);
    //onsole.log(_schemaTypes);
    for (let t = 0; t < _schemaTypes.length; t++) {
      const typeIndex = getTypeIndex(
        schemaJSON.data["__schema"].types,
        _schemaTypes[t]
      );
      const _schemaType = schemaJSON.data["__schema"].types[typeIndex];
      let typeKind = "";
      let _connections = [];
      if (
        typeof _schemaType.enumValues !== "undefined" &&
        _schemaType.enumValues !== null
      ) {
        typeKind = "ENUM";
      } else if (
        typeof _schemaType.fields !== "undefined" &&
        _schemaType.fields !== null
      ) {
        const { objectTypeList, tableType } = objectTypes(_schemaType.fields);
        typeKind = tableType ? "TABLE" : "OBJECT";
        console.log(_schemaType.name, objectTypeList);
        _connections = objectTypeList;
      }

      let _fields = [];
      if (typeKind === "ENUM") {
        _fields = _schemaType.enumValues.map((e) => {
          return { name: e.name, description: e.description };
        });
      } else {
        _fields = _schemaType.fields.map((f) => {
          if (f.type.ofType === null) {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.name,
              required: false,
              list: false,
            };
          } else if (
            f.type.kind === "NON_NULL" &&
            f.type.ofType.kind === "LIST"
          ) {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.ofType.ofType.name,
              required: true,
              list: true,
            };
          } else if (
            f.type.kind === "LIST" &&
            f.type.ofType.kind !== "NON_NULL"
          ) {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.ofType.name,
              required: false,
              list: true,
            };
          } else if (
            f.type.kind === "NON_NULL" &&
            f.type.ofType.kind !== "LIST"
          ) {
            return {
              name: f.name,
              description: f.description,
              kind: f.type.ofType.name,
              required: true,
              list: false,
            };
          }
        });
      }

      if (typeKind !== "") {
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
        //console.log(this.state.schemaTables);
      }
    }

    if (this.state.schemaTables.length > 10) {
      let _viewFactor = viewFactor;
      _viewFactor = Math.ceil(this.state.schemaTables.length / 10);
      tblColMargin += _viewFactor * 70;
      tblRowMargin += _viewFactor * 40;
      viewFactor = Math.max(viewFactor, _viewFactor);
    }
  }

  drawpaths() {
    const { schemaTables } = this.state;

    let maxTypeX = tblColMargin;
    let maxTypeY = tblRowMargin;
    for (let ii = 0; ii < schemaTables.length; ii++) {
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
      const newSquareSize = Math.ceil(maxTypeX / viewHeight);
      console.log("MATRIX SQUARE ", newSquareSize);
      squareSize = newSquareSize * 10;
    }

    console.log("SIZE ", maxTypeX, viewWidth, maxTypeY, viewHeight);
    const maxY = parseInt(Math.max(viewHeight, maxTypeY) / squareSize);
    const maxX = parseInt(Math.max(viewWidth, maxTypeX) / squareSize);
    let matrix = new Array(maxY);
    for (let y = 0; y < maxY; y++) matrix[y] = new Array(maxX);

    let schemaTypes = {};
    for (let ii = 0; ii < schemaTables.length; ii++) {
      const connections = schemaTables[ii].connections;
      const objName = schemaTables[ii].name;
      const objX = schemaTables[ii].x;
      const objY = schemaTables[ii].y;
      const objHeight = schemaTables[ii].height;
      const objWidth = schemaTables[ii].width;

      schemaTypes[objName] = { x: objX, y: objY, connections: connections };

      const bb = {
        ix: objX / squareSize - 1,
        iy: objY / squareSize - 1,
        ax: (objX + objWidth) / squareSize + 1,
        ay: (objY + objHeight) / squareSize + 1,
      };
      //console.log('BB' ,bb);
      for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
          //if (bb.ix <= ((x + 1) * squareSize) && (x * squareSize) <= bb.ax && bb.iy <= ((y + 1) * squareSize) && (y * squareSize) <= bb.ay) {
          //if (bb.ix <= ( x * squareSize) && ( x * squareSize) <= bb.ax && bb.iy <= (y * squareSize) && ( y * squareSize) <= bb.ay) {
          if (bb.ix <= x && x <= bb.ax && bb.iy <= y && y <= bb.ay) {
            matrix[y][x] = 1;
          } else {
            if (typeof matrix[y][x] === "undefined") {
              matrix[y][x] = 0;
            }
          }
        }
      }
    }

    console.log("MATRIX ", maxY, maxX);
    let newCircle = null;
    const svgGroup = document.getElementById("svg-group");
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
    let paths = [];
    Object.keys(schemaTypes).forEach((tbl) => {
      if (schemaTypes[tbl].connections.length > 0) {
        schemaTypes[tbl].connections.forEach((c) => {
          console.log("FIELD::" + tbl + "::" + c.field);
          const dataFrom = "FIELD::" + tbl + "::" + c.field;
          const dataTo = "TYPE_TITLE::" + c.object;
          const cField = document.getElementById(dataFrom);
          console.log("SOURCE FIELD ", cField);

          if (cField !== null) {
            const fBox = cField.getBBox();
            //console.log(fBox);
            // right edge
            const startX1 = schemaTypes[tbl].x + fBox.width;
            const startY1 = schemaTypes[tbl].y + fBox.y + fBox.height / 2;
            // left edge
            //const startX2=startX1;
            //const startY2=startY1;
            const startX2 = schemaTypes[tbl].x;
            const startY2 = schemaTypes[tbl].y + fBox.y + fBox.height / 2;

            //const startX=schemaTypes[tbl].x + fBox.width;
            //const startY=schemaTypes[tbl].y + fBox.y+(fBox.height/2);

            const tField = document.getElementById(dataTo);
            //console.log('TARGET ',tField);
            const tBox = tField.getBBox();
            //console.log(tBox);

            // left edge
            const endX1 = schemaTypes[c.object].x;
            const endY1 = schemaTypes[c.object].y + tBox.height / 2;
            // right edge
            const endX2 = schemaTypes[c.object].x + tBox.width;
            const endY2 = schemaTypes[c.object].y + tBox.height / 2;
            // top edge
            const endX3 = schemaTypes[c.object].x + tBox.width / 2;
            const endY3 = schemaTypes[c.object].y;
            const dPoints = [
              [endX1, endY1],
              [endX2, endY2],
              [endX3, endY3],
            ];
            //const dPoints=[[endX1,endY1]]
            // {"distance":d,"pointIndex":pointIndex}
            const c1 = minPointDistance([startX1, startY1], dPoints);
            const c2 = minPointDistance([startX2, startY2], dPoints);
            let startX = startX1;
            let startY = startY1;
            let endX = endX1;
            let endY = endY1;
            let rightEdge = true;
            let targetEdge = 0;
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

            const startPoint = [startX, startY];
            const endPoint = [endX, endY];
            // if both are on top of each other add some extra
            if (startPoint[0] === endPoint[0]) {
              //console.log('POINTS HAVE SAME X');
              if (rightEdge) {
                // startPoint[0] += 30;
              } else {
                //console.log('ADD MARGIN ',startPoint[0])
                // startPoint[0] -= (squareSize*1);
              }
            }
            // if both are next of each other add some extra margin
            if (startPoint[1] === endPoint[1]) {
              if (rightEdge) {
                // startPoint[1] -= 20;
              } else {
                // startPoint[1] += 20;
              }
            }
            let x1 = 0;
            let y1 = 0;
            let x2 = 0;
            let y2 = 0;

            //source.....
            if (rightEdge) {
              x1 = parseInt(startPoint[0] / squareSize) + 2;
              y1 = parseInt(startPoint[1] / squareSize);
            } else {
              x1 = parseInt(startPoint[0] / squareSize) - 2;
              y1 = parseInt(startPoint[1] / squareSize);
            }

            //left
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
            }
            //right
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
              }
              //console.log(x2,y2);
            }
            //top
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
            }

            //console.log(x1, y1, x2, y2);
            paths.push({
              dataFrom: dataFrom,
              dataTo: dataTo,
              start: { x: startX, y: startY },
              end: { x: endX, y: endY },
              path: { x1: x1, y1: y1, x2: x2, y2: y2 },
            });
          }
        });
      }
    });

    console.log(paths);
    const grid = new PF.Grid(matrix);
    const finder = new PF.BiBestFirstFinder({
      allowDiagonal: false,
      dontCrossCorners: false,
      heuristic: PF.Heuristic.manhattan,
    });

    paths.forEach((p, pi) => {
      let gridBackup = grid.clone();
      // set start and end walkable
      //grid.setWalkableAt(0, 1, true);
      console.log(pi, p);
      let path = finder.findPath(
        p.path.x1,
        p.path.y1,
        p.path.x2,
        p.path.y2,
        gridBackup
      );
      //console.log(path);

      if (path.length > 0) {
        let points = [p.start];
        //console.log(newPath.length);
        console.log("PATH POINTS ", path);
        let newPath = PF.Util.smoothenPath(gridBackup, path);
        console.log("NEW PATH ", newPath);
        if (newPath.length > 2) {
          for (let i = 1; i < newPath.length - 1; i++) {
            points.push({
              x: newPath[i][0] * squareSize,
              y: newPath[i][1] * squareSize,
            });
          }
        } else {
          for (let i = 0; i < newPath.length; i++) {
            points.push({
              x: newPath[i][0] * squareSize,
              y: newPath[i][1] * squareSize,
            });
          }
        }

        points.push(p.end);
        console.log("FINAL POINTS ", pi, points);
        svgGroup.appendChild(svgPath(points, p.dataFrom, p.dataTo));
        // let newPath = PF.Util.smoothenPath(gridBackup, path);
        // svg.appendChild(svgPath(newPath, squareSize));
      } else {
        console.log("NO PATH ", pi);
      }
    });

    //return {schemaTypes,matrix};
  }
  componentDidMount() {
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

    this.getRectsInterval = setInterval(() => {
      //const svgGroup = document.getElementById("svg-group");
      const testData = document.querySelectorAll("#svg-group g");
      console.log(testData);
      if (testData.length > 0) {
        //"TEST_TITLES::Newtypetbl"
        clearInterval(this.getRectsInterval);
        let _types = {};
        //titleHeight = testData[0].getBBox().height;
        testData.forEach((t) => {
          if (t.id.startsWith("TYPE_TITLE")) {
            const _type = t.id.split("::")[1];
            if (typeof _types[_type] === "undefined") {
              _types[_type] = { width: 0 };
            }

            _types[_type].width = Math.max(
              t.getBBox().width,
              _types[_type].width
            );
            titleHeight = t.getBBox().height;
          }
          if (t.id.startsWith("TYPE_FIELDS::")) {
            const _type = t.id.split("::")[1];
            if (typeof _types[_type] === "undefined") {
              _types[_type] = { width: 0 };
            }
            _types[_type].width = Math.max(
              t.getBBox().width,
              _types[_type].width
            );
          }
        });
        console.log(_types);
        let newState = { ...this.state };
        let { schemaTables } = newState;
        for (let i = 0; i < schemaTables.length; i++) {
          const _tbl = schemaTables[i].name;
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
          schemaTables[i].height =
            (schemaTables[i]._fields.length + 1) * titleHeight;
        }

        const orderedTypes = createSVG(schemaTables);
        console.log("NEW ORDER ", orderedTypes);
        for (let i = 0; i < schemaTables.length; i++) {
          const _tbl = schemaTables[i].name;
          schemaTables[i].x = Math.ceil(orderedTypes[_tbl].x);
          schemaTables[i].y = Math.ceil(orderedTypes[_tbl].y);
        }
        newState.schemaTables = schemaTables;
        this.setState(newState);
        this.drawpaths();
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

        const panZoom = SvgPanZoom("#svg-container", {
          viewportSelector: "#svg-group",
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 0.1,
          eventsListenerElement: document.querySelector(
            "#svg-container #svg-group"
          ),
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

  componentWillUnmount() {
    clearInterval(this.getRectsInterval);
  }

  componentDidUpdate() {
    console.log("DID UPDATE ", this.state.loading, this.state.scaled);
    const svgGroup = document.getElementById("svg-group");
    if (!this.state.loading && this.state.scaled && svgGroup !== null) {
      console.log(
        "GROUP",
        svgGroup.getBBox(),
        svgGroup.getBoundingClientRect()
      );
      console.log(this.text.getBBox());
      console.log(
        "UPDATE ",
        viewWidth,
        viewHeight,
        document.querySelector(".viewport").width,
        document.querySelector("#viewport").offsetWidth
      );

      for (let i = 0; i < this.state.schemaTables.length; i++) {
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
        console.log(
          "UPDATE-1",
          document.getElementById(
            "TEST_TITLES::" + this.state.schemaTables[i].name
          )
        );
      }
    }
    if (!this.state.loading && !this.state.scaled) {
      console.log("UPDATE ", this.state);
      for (let i = 0; i < this.state.schemaTables.length; i++) {
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
        console.log(
          "UPDATE-2",
          document
            .getElementById("TEST_TITLES::" + this.state.schemaTables[i].name)
            .getBBox()
        );
      }
      //this.setState({ scaled: true });
    }
  }
  render() {
    //ref={this.InputRef}
    const { scaled, schemaTables, loading } = this.state;
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
    let tables = [];
    if (!scaled) {
      tables = schemaTables.map((t, i) => {
        return (
          <g
            key={"g-" + i}
            id={"TYPE:::" + t.name + "-" + i}
            transform={"translate(" + t.x + "," + t.y + ")"}
          >
            <g
              id={"TYPE_TITLE::" + t.name}
              data-title={"TYPE_TITLE::" + t.name}
              onClick={typeClick}
            >
              <rect
                x={0}
                width={t.width + 1}
                height={titleHeight}
                className={"type-title " + t.kind.toLowerCase()}
              />
              <text
                id={"TYPE_TITLE::TEXT::" + t.name}
                fontSize={"18px"}
                x={t.width / 2}
                y={titleHeight / 2}
                dominantBaseline="central"
                textAnchor="middle"
                fill={"white"}
              >
                {t.name}
              </text>
            </g>

            <g id={"TYPE_FIELDS::" + t.name}>
              {t._fields.map((fld, index) => (
                <FieldTxt
                  id={t.name}
                  top={index}
                  width={t.width}
                  key={"f-" + index}
                  kind={t.kind}
                  field={fld}
                />
              ))}
            </g>
          </g>
        );
      });
    } else {
      tables.push(
        <text
          key={"k-" + schemaTables.length}
          fontSize={"18px"}
          y={250}
          ref={(t) => {
            this.text = t;
          }}
        >
          TESTII
        </text>
      );
    }
    // in case there is  pt/px issue
    ///1pt ≅ 1.3333px or user units (1px = 0.75pt)
    return (
      <div
        id="viewport"
        className="viewport"
        style={{ backgroundColor: "beige", minHeight: "100%" }}
        onClick={typeClick}
      >
        <React.Fragment>
          {scaled && (
            <svg
              style={{
                visibility: "visible",
                position: "absolute",
                top: 0,
                left: 300,
              }}
              id="svg-test"
              width={"100%"}
              height={viewHeight}
              viewBox={
                "0 0 " + viewWidth * viewFactor + " " + viewHeight * viewFactor
              }
            >
              {tables}
            </svg>
          )}
          {!scaled && (
            <SvgPrimitive
              width={"100%"}
              height={viewHeight}
              id="svg-container"
              viewBox={
                "0 0 " + viewWidth * viewFactor + " " + viewHeight * viewFactor
              }
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
                <marker
                  id="dot"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                >
                  <circle cx="5" cy="5" r="5" fill="red" />
                </marker>
                <style id="svg-path-styles" type="text/css">
                  {pathStyle}
                </style>
              </defs>
              <g id="svg-group" transform={"translate(0,0)"}>
                {tables}
              </g>
            </SvgPrimitive>
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default Visualizations;
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
