import React from "react";
import ReactJson from 'react-json-view';

const JsonView=({theme={},schema={},...props}) =>{
    
    const exportData = new Blob([ JSON.stringify(schema) ], { type: 'application/json' });
    const exportUrl = window.URL.createObjectURL(exportData);
    return (
        <React.Fragment>
            <div style={{"margin-top":"20px","margin-bottom":"20px"}}>
            <a href={exportUrl} target="_blank"  download="schema.json" rel="noopener noreferrer" style={{"font-size":"16px"}}>Export</a>
            </div>
             <ReactJson src={schema} collapsed={false}/>
       </React.Fragment>
        
    )    

}    
export default JsonView;