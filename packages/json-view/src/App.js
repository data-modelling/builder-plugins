import JsonViewPlugin from "./JsonViewPlugin";
import React from "react";
import {
 HashRouter,
} from "react-router-dom";

//const App = forwardRef(({theme={},schema={ test: "Testing2" }},ref) => {

const App = ({theme={},schema={ test: "Testing2" }}) => (
  <div>
    <h1>Plugin Test</h1>
    <HashRouter>
    <JsonViewPlugin theme={theme} schema={schema} />
    </HashRouter>
  </div>
);

export default App;
