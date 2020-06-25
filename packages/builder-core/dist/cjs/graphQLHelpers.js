"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypes = getTypes;
exports.getTypeIndex = getTypeIndex;
exports.emptySchema = exports.Schema = void 0;

var _graphql = require("graphql");

var _introspectionQuery = require("graphql/utilities/introspectionQuery");

var _buildClientSchema = require("graphql/utilities/buildClientSchema");

var _schemaPrinter = require("graphql/utilities/schemaPrinter");

//const { buildSchema, graphqlSync, introspectionQuery,buildClientSchema,printSchema } = require("graphql");
var Schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: "Query",
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: _graphql.GraphQLString
      }
    }
  }),
  mutation: new _graphql.GraphQLObjectType({
    name: "Mutation",
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: _graphql.GraphQLString
      }
    }
  }),
  subscription: new _graphql.GraphQLObjectType({
    name: "Subscription",
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: _graphql.GraphQLString
      }
    }
  })
}); //printIntrospectionSchema(schema: GraphQLSchema)
//export const emptySchema = graphqlSync(Schema, introspectionQuery);

exports.Schema = Schema;

var emptySchema = function emptySchema() {
  //graphqlSync(Schema, introspectionQuery);
  return new Promise(function (resolve, reject) {
    (0, _graphql.graphql)(Schema, _introspectionQuery.introspectionQuery).then(function (response) {
      console.log(response);
      resolve(response);
    })["catch"](function (err) {
      console.log("ERR ", err);
      reject(err);
    });
  });
};

exports.emptySchema = emptySchema;

function getTypes(schema) {
  //const ignoreTypes=["Query","Mutation","Subscription","__Schema","__Type","__TypeKind","__Field","__InputValue","__EnumValue","__Directive","__DirectiveLocation"];
  var ignoreTypes = ["Query", "Mutation", "Subscription"]; //console.log("GET TYPES ", Object.keys(schema));

  var _existingTypes = [];

  if (typeof schema["data"] !== "undefined" && typeof schema["data"]["__schema"].types !== "undefined" && schema["data"]["__schema"].types.length > 0) {
    schema["data"]["__schema"].types.forEach(function (t, ii) {
      //console.log("TYPE ", ii);
      if (t.kind !== "SCALAR" && !t.name.startsWith("__") && ignoreTypes.indexOf(t.name) === -1) {
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