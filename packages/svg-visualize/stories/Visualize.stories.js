import React from "react";
import Visualizations from "../src/Visualizations";
import schema from "./schema-1-54.json";
import theme from "./theme";

export default { title: "Visualize" };
//const theme = {};
//const schema = { test: "Testing" };

export const view = () => <Visualizations theme={theme} schemaJSON={schema} />;

view.story = {
  name: "Visualize",
};
