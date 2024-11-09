import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function HandleItemClick({page}){           
      console.log("output1:",page)
      let output=page.replace(/s+/g,"").replace(/[^a-zA-Z0-9/s]/g,"")
      console.log("output:",output)
    return(
        <>
        
        <Link to={output}>
        <button className="btn btn-primary m-2 p-4 handleItemClick">
            <p id='root1'>{page}</p>
        </button>
        </Link> 
        
       
        </>
    )}
         
 export default HandleItemClick;