import React from "react";
//import JsonViewPlugin from "../src/JsonViewPlugin";
import JsonViewPlugin from "../src/App";
export default { title: "JsonView" };

export const view = () => <JsonViewPlugin />;

view.story = {
  name: "JsonView",
};
