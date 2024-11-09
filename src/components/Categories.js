import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import HandleItemClick from './handleItemClick';
import React from 'react';

function Categories(){
  
    const [data, setData] = useState([]);
       
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
          .then(response => response.data)
          .then(data => setData(data));          
        }, []);
        
        return(    
       
          <>  

      <div className='d-flex flex-wrap justify-content-center'>
      
          {data.map(item=>(<div  key={item.id}>
            <HandleItemClick page= {item}/>
              
              </div>
            
            ))}
          </div> 
          
          </>

          
        )

         };     
        
              
export default Categories;
