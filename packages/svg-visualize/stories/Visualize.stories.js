import React from "react";
import Visualizations from "../src/Visualizations";
//import schema from "./schema-1-54.json";
import schema from "./swapi_introspection.json";

import theme from "./theme";

export default { title: "Visualize" };
//const theme = {};
//const schema = { test: "Testing" };
//console.log("IMPORT ", schema);
export const view = () => <Visualizations theme={theme} schema={schema} />;

view.story = {
  name: "Visualize",
};
