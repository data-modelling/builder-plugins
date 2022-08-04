import JsonViewPlugin from "./JsonViewPlugin";
import React from "react";


//const App = forwardRef(({theme={},schema={ test: "Testing2" }},ref) => {

const App = ({theme={},schema={ test: "Testing2" }}) => (
  <div>
    <h1>Plugin Test</h1>
    <JsonViewPlugin theme={theme} schema={schema} />
  </div>
);

export default App;
