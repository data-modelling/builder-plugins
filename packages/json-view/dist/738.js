"use strict";(self.webpackChunk_builder_plugins_json_view=self.webpackChunk_builder_plugins_json_view||[]).push([[738],{738:(e,t,n)=>{n.r(t);var l=n(784),r=n(47),a=n.n(r),o=n(833),c=n(289),u={marginBottom:"20px",marginTop:"20px","& a":{fontSize:"20px"}},m=function(e){var t=e.title,n=(0,c.TH)().pathname,r=(0,c.UO)().id;return console.log("PLUGIN ROUTE ",n,r),l.createElement("div",null,l.createElement("h1",null,t," ",r),l.createElement("pre",null,n),r&&l.createElement(o.rU,{to:"".concat(n,"/../").concat(1)},"Go to Nested Route ",1))};function i(e){var t=(0,c.s0)();console.log("PLUGIN ",location);var n=new Blob([JSON.stringify(e.schema)],{type:"application/json"}),r=window.URL.createObjectURL(n);return l.createElement(l.Fragment,null,l.createElement("button",{onClick:function(){t("/route-bb",{replace:!0})}},"NAV TO /route-bb"),l.createElement("nav",null,l.createElement(o.rU,{to:"/route-aa"},"Route A"),l.createElement(o.rU,{to:"/route-bb"},"Route B")),l.createElement(c.Z5,null,l.createElement(c.AW,{path:"/route-bb",element:l.createElement(m,{title:"Nested Route"})}),l.createElement(c.AW,{path:"/route-aa",element:l.createElement(m,{title:"Nested Route"})})),l.createElement("div",{style:u},l.createElement("a",{href:r,target:"_blank",download:"schema.json",rel:"noopener noreferrer"},"Export")),l.createElement(a(),{src:e.schema,collapsed:!1}))}i.__docgenInfo={description:"",methods:[],displayName:"JsonViewPlugin"};var s=function(e){var t=e.theme,n=void 0===t?{}:t,r=e.schema,a=void 0===r?{test:"Testing2"}:r;return l.createElement("div",null,l.createElement("h1",null,"Plugin Test"),l.createElement(o.UT,null,l.createElement(i,{theme:n,schema:a})))};s.__docgenInfo={description:"",methods:[],displayName:"App",props:{theme:{defaultValue:{value:"{}",computed:!1},required:!1},schema:{defaultValue:{value:'{ test: "Testing2" }',computed:!1},required:!1}}};const d=s;var p=n(29),E=document.getElementById("root");(0,p.s)(E).render(l.createElement(d,null))}}]);