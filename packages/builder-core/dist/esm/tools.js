"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonToSDL = jsonToSDL;
exports.sdlToJSON = sdlToJSON;
exports.updateSchemaDirective = updateSchemaDirective;
exports.dnsCase = dnsCase;
exports.pascalCase = pascalCase;
exports.fieldKindText = fieldKindText;
exports.getTypes = getTypes;
exports.getTypeIndex = getTypeIndex;
exports.getNewDefaultQueries = getNewDefaultQueries;
exports.parseSchema = parseSchema;
exports.getSchemaInfo = getSchemaInfo;
exports.typeTitle = typeTitle;
exports.getProperName = getProperName;
exports.getProperDescription = getProperDescription;
exports.defaultFieldKinds = exports.emptySchema = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// graphql tools....
var _require = require("graphql"),
    buildSchema = _require.buildSchema,
    graphqlSync = _require.graphqlSync,
    introspectionQuery = _require.introspectionQuery,
    buildClientSchema = _require.buildClientSchema,
    printSchema = _require.printSchema;

var sdlString = "\n  \"\"\" DEFAULT_SCHEMA \"\"\"  \n  type Query {\n    defaultSchema: String\n  }\n  \"\"\" DEFAULT_SCHEMA \"\"\"  \n  type Mutation {\n    defaultSchema: String\n  }\n  \"\"\" DEFAULT_SCHEMA \"\"\"    \n  type Subscription {\n    defaultSchema: String\n  }\n";
var graphqlSchemaObj = buildSchema(sdlString);

function jsonToSDL(json) {
  var schemaObj = buildClientSchema(json.data);
  var sdl = printSchema(schemaObj);
  return sdl;
}

function sdlToJSON(sdl) {
  var schemaObj = buildSchema(sdl);
  return graphqlSync(schemaObj, introspectionQuery);
}

var emptySchema = graphqlSync(graphqlSchemaObj, introspectionQuery).data;
exports.emptySchema = emptySchema;

function updateSchemaDirective(name, description) {
  /*
  """Description text here """
  directive @schema_title(
  """S3 bucket name"""
  s3bucket: String
  ) on SCHEMA
   defaultSchema['__schema'].directives.push({"name":"schema_title","description":"Description text here ","locations":['SCHEMA'],
      "args":[{"name":"s3bucket","description":"S3 bucket name","type":{"kind":"SCALAR","name":"String","ofType":null},"defaultValue":null}]});
  */
  var newDirective = {
    "name": "schema_title",
    "description": description,
    "locations": ['SCHEMA'],
    "args": [{
      "name": "name",
      "description": name,
      "type": {
        "kind": "SCALAR",
        "name": "String",
        "ofType": null
      },
      "defaultValue": null
    }, {
      "name": "S3_key",
      "description": dnsCase(name),
      "type": {
        "kind": "SCALAR",
        "name": "String",
        "ofType": null
      },
      "defaultValue": null
    }, {
      "name": "created",
      "description": new Date().toISOString(),
      "type": {
        "kind": "SCALAR",
        "name": "String",
        "ofType": null
      },
      "defaultValue": null
    }]
  };
  return newDirective;
}

var defaultFieldKinds = {
  "String": "String",
  "Int": "Integer",
  "Float": "Float",
  "Boolean": "Boolean"
}; //proper fqdn

exports.defaultFieldKinds = defaultFieldKinds;

function dnsCase(s) {
  return s.match(/[a-zA-Z0-9]+/gi).map(function (word) {
    return word.toLowerCase();
  }).join('');
}

;

function pascalCase(s) {
  if (s === null || s.length === 0) {
    return '';
  } //return s.match(/[a-z]+/gi)


  return s.match(/[a-zA-Z0-9]+/gi).map(function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }).join('');
}

function fieldKindText(fld) {
  var kindTxt = fld.kind;

  if (fld.nonNullable === 1 && fld.list === 1) {
    if (Object.keys(defaultFieldKinds).indexOf(fld.kind) > -1) {
      // don't allow nulls on list kind except OBJECT kind... 
      //console.log('field kind ', fld.kind, fld.scalarValue);
      if (fld.scalarValue) {
        kindTxt = '[' + kindTxt + '!]';
      } else {
        kindTxt = '[' + kindTxt + ']!';
      }
    } else {
      // if kind is object then require object is not null
      kindTxt = '[' + kindTxt + ']!';
    }
  }

  if (fld.nonNullable === 0 && fld.list === 1) {
    kindTxt = '[' + kindTxt + ']';
  }

  if (fld.nonNullable === 1 && fld.list === 0) {
    kindTxt += '!';
  }

  return kindTxt;
}

function getTypes(schema) {
  //const ignoreTypes=["Query","Mutation","Subscription","__Schema","__Type","__TypeKind","__Field","__InputValue","__EnumValue","__Directive","__DirectiveLocation"];
  var ignoreTypes = ["Query", "Mutation", "Subscription"];
  var _existingTypes = [];

  if (typeof schema['data'] !== 'undefined' && typeof schema['data']['__schema'].types !== 'undefined' && schema['data']['__schema'].types.length > 0) {
    schema['data']['__schema'].types.forEach(function (t) {
      if (t.kind !== 'SCALAR' && !t.name.startsWith('__') && ignoreTypes.indexOf(t.name) === -1) {
        _existingTypes.push(t.name);
      }
    });
  }

  return _existingTypes;
}

function getTypeIndex(_types, _name) {
  return _types.findIndex(function (n) {
    return n.name === _name;
  });
}

function getNewDefaultQueries(newType, objectType) {
  var queries = []; // Only Table type has ID...

  if (objectType === 'table') {
    /*
    name	"getEvent"
    description	null
    args	
    0	
    name	"id"
    description	null
    type	
    kind	"NON_NULL"
    name	null
    ofType	
    kind	"SCALAR"
    name	"ID"
    ofType	null
    defaultValue	null
    type	
    kind	"OBJECT"
    name	"Event"
    ofType	null
    isDeprecated	false
    deprecationReason	null
    */
    queries.push({
      "name": 'Get' + newType.name,
      "description": "Get one" + newType.name,
      "args": [{
        "name": "Id",
        "description": "Unique ID",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "type": {
        "kind": newType.kind,
        "name": newType.name,
        "ofType": null
      },
      "isDeprecated": false,
      "deprecationReason": null
    });
  }

  queries.push({
    "name": 'All' + newType.name,
    "description": "Get all " + newType.name + "s",
    "args": [],
    "type": {
      "kind": "LIST",
      "name": null,
      "ofType": {
        "kind": newType.kind,
        "name": newType.name,
        "ofType": null
      }
    },
    "isDeprecated": false,
    "deprecationReason": null
  });
  return queries;
  /*
      0	
  name	"allEvents"
  description	null
  args	[]
  type	
  kind	"LIST"
  name	null
  ofType	
  kind	"OBJECT"
  name	"Event"
  ofType	null
  isDeprecated	false
  deprecationReason	null
  */
}

function parseSchema(schema) {
  var schemaJSON = {};

  try {
    schemaJSON = JSON.parse(schema.Body.toString());
  } catch (e) {
    console.log('ERR ', e, e.name); // lets try stringify... 

    if (e.name === 'SyntaxError') {
      console.log('JSON ERROR'); //console.log(schema.Body.toString().replace(/'/g,''));
      //.replace(/(\r\n|\n|\r)/gm, "");
      //const schemaSTR=schema.Body.toString().replace(/(\r\n|\n|\r)/g, "").replace(/([^"]+)|("(?:[^"\\]|\\.)+")/, "");

      var schemaSTR = schema.Body.toString().replace(/(\r\n|\n|\r)/g, "").replace(/([^"]+)|("[^"]+")/g, function ($0, $1, $2) {
        if ($1) {
          return $1.replace(/\s/g, '');
        } else {
          return $2;
        }
      });
      /*
       console.log(schemaSTR);
       for (let x=0;x<30;x++) {
           console.log(x,schemaSTR.charAt(x),schemaSTR.charCodeAt(x));
       }    
       */

      schemaJSON = JSON.parse(schemaSTR);
    }
  }

  return schemaJSON;
}

function getSchemaInfo(s3Key, schema) {
  var _schema = {
    "bucket": s3Key,
    "name": "",
    "description": "",
    "created": "",
    "modified": schema.LastModified.toISOString()
  }; //console.log(typeof schema.Body.toString());

  var schemaJSON = parseSchema(schema);
  /*
  try {
  schemaJSON = JSON.parse(schema.Body.toString());
  } catch (e) {
      console.log('ERR ',e,e.name);
      // lets try stringify... 
      if (e.name==='SyntaxError') {
          console.log('JSON ERROR');
          //console.log(schema.Body.toString().replace(/'/g,''));
          //.replace(/(\r\n|\n|\r)/gm, "");
          //const schemaSTR=schema.Body.toString().replace(/(\r\n|\n|\r)/g, "").replace(/([^"]+)|("(?:[^"\\]|\\.)+")/, "");
          const schemaSTR=schema.Body.toString().replace(/(\r\n|\n|\r)/g, "").replace(/([^"]+)|("[^"]+")/g, function($0, $1, $2) {
              if ($1) {
                  return $1.replace(/\s/g, '');
              } else {
                  return $2; 
              } 
          });
          console.log(schemaSTR);
          for (let x=0;x<30;x++) {
              console.log(x,schemaSTR.charAt(x),schemaSTR.charCodeAt(x));
          }    
          schemaJSON = JSON.parse(schemaSTR);
      }
  }
  */

  console.log('SCHEMA JSON ', _typeof(schemaJSON), schemaJSON);
  var schemaDirectives = schemaJSON['data']['__schema'].directives; //console.log('DIRECTIVES ', schemaDirectives);

  var schemaTitleIndex = schemaDirectives.findIndex(function (t) {
    return t.name === 'schema_title';
  });
  console.log('TITLE ', schemaTitleIndex);

  if (schemaTitleIndex > -1) {
    var schemaTitle = schemaDirectives[schemaTitleIndex];
    _schema.description = schemaTitle.description; //console.log('MODIFIED ', typeof schema.LastModified, schema.LastModified);

    schemaTitle.args.forEach(function (arg) {
      if (arg.name === 'name') {
        _schema['name'] = arg.description;
      }

      if (arg.name === 'created') {
        _schema['created'] = arg.description;
      }
    });
  }

  console.log('SCHEMA ', _schema);
  return _schema;
}

function typeTitle(typeKind) {
  var _title = '';

  switch (typeKind.toLowerCase()) {
    case 'table':
      _title = 'Table Type';
      break;

    case 'enum':
      _title = 'Enum Type';
      break;

    case 'object':
      _title = 'Object Type';
      break;

    default:
      break;
  }

  return _title;
}

function getProperName(description, name) {
  var _name = name;

  if (description !== null && description.startsWith('#') && description.match(/#/g).length === 2) {
    var descrSplit = description.split('#');
    _name = descrSplit[1];
  }

  return _name;
}

function getProperDescription(description) {
  var _description = description;

  if (description !== null && description.startsWith('#') && description.match(/#/g).length === 2) {
    var descrSplit = description.split('#');
    _description = descrSplit[2].trim();
  }

  return _description;
}