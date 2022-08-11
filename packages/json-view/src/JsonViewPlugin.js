
import React from "react";
import ReactJson from 'react-json-view';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
  useLocation,
  useNavigate
} from "react-router-dom";

const linkStyle = {
  marginBottom: '20px',
  marginTop: '20px',
  "& a": {
    fontSize:'20px'
  }
};

const RELATED_ID = 1;

const MyComponent = ({ title }) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  console.log("PLUGIN ROUTE ",pathname,id);
  return (
    <div>
      <h1>
        {title} {id}
      </h1>
      <pre>{pathname}</pre>
      {id && RELATED_ID && (
        <Link to={`${pathname}/../${RELATED_ID}`}>
          Go to Nested Route {RELATED_ID}
        </Link>
      )}
    </div>
  );
};
export default function JsonViewPlugin(props) {
  //const location = useLocation();
 

  const navigate=useNavigate();
 console.log("PLUGIN ",location,React.version);
    const exportData = new Blob([ JSON.stringify(props.schema) ], { type: 'application/json' });
    const exportUrl = window.URL.createObjectURL(exportData);
    return (
        <>
        <div>Plugin version {React.version}</div>
        <button onClick={()=>{
          navigate("/route-bb",{replace:true})
        }}>NAV TO /route-bb</button>
        <nav>
        <Link to="/route-aa">Route A</Link>
          <Link to="/route-bb">Route B</Link>
        </nav>
        <Routes>
          <Route
            path="/route-bb"
            element={<MyComponent title="Nested Route" />}
          />
          <Route
            path="/route-aa"
            element={<MyComponent title="Nested Route" />}
          />
         </Routes> 
          <div style={linkStyle}>
          <a href={exportUrl} target="_blank"  download="schema.json" rel="noopener noreferrer"  >Export</a>
          </div>
           <ReactJson src={props.schema} collapsed={false}/>
       </>
        
    )    

} 
