
import React from "react";
import ReactJson from 'react-json-view';

const linkStyle = {
  marginBottom: '20px',
  marginTop: '20px',
  "& a": {
    fontSize:'20px'
  }
};

export default function JsonViewPlugin(props) {
    
    const exportData = new Blob([ JSON.stringify(props.schema) ], { type: 'application/json' });
    const exportUrl = window.URL.createObjectURL(exportData);
    return (
        <React.Fragment>
          <div style={linkStyle}>
          <a href={exportUrl} target="_blank"  download="schema.json" rel="noopener noreferrer"  >Export</a>
          </div>
           <ReactJson src={props.schema} collapsed={false}/>
       </React.Fragment>
        
    )    

} 
