"use strict";(self.webpackChunk_builder_plugins_json_view=self.webpackChunk_builder_plugins_json_view||[]).push([[890],{890:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(942),a=n(900),r=n.n(a),o=n(833),c=function(e){var t=e.theme,n=void 0===t?{}:t,a=e.schema,c=void 0===a?{test:"Testing2"}:a;return r().createElement("div",null,r().createElement("h1",null,"Plugin Test"),r().createElement(o.UT,null,r().createElement(l.Z,{theme:n,schema:c})))};c.__docgenInfo={description:"",methods:[],displayName:"App",props:{theme:{defaultValue:{value:"{}",computed:!1},required:!1},schema:{defaultValue:{value:'{ test: "Testing2" }',computed:!1},required:!1}}};const u=c},942:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(900),a=n.n(l),r=n(47),o=n.n(r),c=n(289),u=n(833),i={marginBottom:"20px",marginTop:"20px","& a":{fontSize:"20px"}},m=function(e){var t=e.title,n=(0,c.TH)().pathname,l=(0,c.UO)().id;return console.log("PLUGIN ROUTE ",n,l),a().createElement("div",null,a().createElement("h1",null,t," ",l),a().createElement("pre",null,n),l&&a().createElement(u.rU,{to:"".concat(n,"/../").concat(1)},"Go to Nested Route ",1))};function s(e){var t=(0,c.s0)();console.log("PLUGIN ",location);var n=new Blob([JSON.stringify(e.schema)],{type:"application/json"}),l=window.URL.createObjectURL(n);return a().createElement(a().Fragment,null,a().createElement("button",{onClick:function(){t("/route-bb",{replace:!0})}},"NAV TO /route-bb"),a().createElement("nav",null,a().createElement(u.rU,{to:"/route-aa"},"Route A"),a().createElement(u.rU,{to:"/route-bb"},"Route B")),a().createElement(c.Z5,null,a().createElement(c.AW,{path:"/route-bb",element:a().createElement(m,{title:"Nested Route"})}),a().createElement(c.AW,{path:"/route-aa",element:a().createElement(m,{title:"Nested Route"})})),a().createElement("div",{style:i},a().createElement("a",{href:l,target:"_blank",download:"schema.json",rel:"noopener noreferrer"},"Export")),a().createElement(o(),{src:e.schema,collapsed:!1}))}s.__docgenInfo={description:"",methods:[],displayName:"JsonViewPlugin"}}}]);