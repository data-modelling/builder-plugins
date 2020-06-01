import React from "react";
import JsonViewPlugin from "../src/JsonView";
export default { title: "JsonView" };
const theme = {};
const schema = { test: "Testing" };
export const view = () => <JsonViewPlugin theme={theme} schema={schema} />;

view.story = {
  name: "JsonView",
};
