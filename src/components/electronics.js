import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import PaymentComponent from './PaymentComponent';



function Electronics(){
    const [Electronicsdata, setCarouselData] = useState([]);
    
          useEffect(()=>{
          axios.get('https://fakestoreapi.com/products/category/electronics')
          .then(response => response.data)
          .then(Electronicsdata => setCarouselData(Electronicsdata));
        },[])
       
        return(     
            <>  

        <div className='dis-product d-flex flex-wrap justify-content-center'>
          

            {Electronicsdata.map(item=>(<div  key={item.id}>

              <div className="card">
                  <img src={item.image} class="card-img-top"alt=''/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>                      
                      {<PaymentComponent page={item}/>}
                    
                  </div>
                </div>
            </div>))}
            </div> 
            </>
          )}

export default Electronics;