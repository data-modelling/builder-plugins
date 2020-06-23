//const { buildSchema, graphqlSync, introspectionQuery,buildClientSchema,printSchema } = require("graphql");

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  graphqlSync,
} from "graphql";

import { introspectionQuery } from "graphql/utilities/introspectionQuery";
import { buildClientSchema } from "graphql/utilities/buildClientSchema";
import { printSchema } from "graphql/utilities/schemaPrinter";

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: GraphQLString,
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: GraphQLString,
      },
    },
  }),
  subscription: new GraphQLObjectType({
    name: "Subscription",
    description: "DEFAULT_SCHEMA",
    fields: {
      defaultSchema: {
        type: GraphQLString,
      },
    },
  }),
});

//printIntrospectionSchema(schema: GraphQLSchema)
//export const emptySchema = graphqlSync(Schema, introspectionQuery);
export const emptySchema = () => {
  //graphqlSync(Schema, introspectionQuery);
  return new Promise(function (resolve, reject) {
    graphql(Schema, introspectionQuery)
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((err) => {
        console.log("ERR ", err);
        reject(err);
      });
  });
};

export function getTypes(schema) {
  //const ignoreTypes=["Query","Mutation","Subscription","__Schema","__Type","__TypeKind","__Field","__InputValue","__EnumValue","__Directive","__DirectiveLocation"];
  const ignoreTypes = ["Query", "Mutation", "Subscription"];
  let _existingTypes = [];
  if (
    typeof schema["data"] !== "undefined" &&
    typeof schema["data"]["__schema"].types !== "undefined" &&
    schema["data"]["__schema"].types.length > 0
  ) {
    schema["data"]["__schema"].types.forEach((t) => {
      if (
        t.kind !== "SCALAR" &&
        !t.name.startsWith("__") &&
        ignoreTypes.indexOf(t.name) === -1
      ) {
        _existingTypes.push(t.name);
      }
    });
  }
  return _existingTypes;
}
export function getTypeIndex(_types, _name) {
  return _types.findIndex((n) => {
    return n.name === _name;
  });
}

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
