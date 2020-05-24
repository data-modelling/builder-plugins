import React from "react";
import {useHistory} from "react-router-dom";

const JsonView=({theme={},schema={},...props}) =>{
    const history = useHistory();
  

    return (
        <React.Fragment>
       <div>JSON VIEW</div>
       <pre>{JSON.stringify(schema)}</pre>
       </React.Fragment>
        
    )    

}    
export default JsonView;