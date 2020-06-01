"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptySchema = exports.Schema = void 0;

var _graphql = require("graphql");

var _introspectionQuery = require("graphql/utilities/introspectionQuery");

var _buildClientSchema = require("graphql/utilities/buildClientSchema");

var _schemaPrinter = require("graphql/utilities/schemaPrinter");

//const { buildSchema, graphqlSync, introspectionQuery,buildClientSchema,printSchema } = require("graphql");
var Schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: _graphql.GraphQLString
      }
    }
  }),
  mutation: new _graphql.GraphQLObjectType({
    name: 'Mutation',
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: _graphql.GraphQLString
      }
    }
  }),
  subscription: new _graphql.GraphQLObjectType({
    name: 'Subscription',
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
      console.log('ERR ', err);
      reject(err);
    });
  });
};
/*
/*
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
*/
//export const emptySchema = printIntrospectionSchema(Schema);

/*
const sdlString = `
  """ DEFAULT_SCHEMA """  
  type Query {
    defaultSchema: String
  }
  """ DEFAULT_SCHEMA """  
  type Mutation {
    defaultSchema: String
  }
  """ DEFAULT_SCHEMA """    
  type Subscription {
    defaultSchema: String
  }
`;

const graphqlSchemaObj = buildSchema(sdlString);

export function jsonToSDL(json) {
    const schemaObj = buildClientSchema(json.data);
    const sdl = printSchema(schemaObj);
    return sdl;
}
export function sdlToJSON(sdl) {
    const schemaObj = buildSchema(sdl);
    return graphqlSync(schemaObj, introspectionQuery);
}
export const emptySchema = graphqlSync(graphqlSchemaObj, introspectionQuery).data;
*/


exports.emptySchema = emptySchema;