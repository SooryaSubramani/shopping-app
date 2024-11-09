import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

function Womensclothing(){
    const [Womensclothingdata, setCarouselData] = useState([]);


        useEffect(()=>{
          axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
          .then(response => response.data)
          .then(Womensclothingdata => setCarouselData(Womensclothingdata));
        },[])
       
        return(     
            <>  

        <div className='dis-product d-flex justify-content-center'>
          

            {Womensclothingdata.map(item=>(<div  key={item.id}>

              <div className="card">
                  <img src={item.image} className="card-img-top"alt=''/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {/* <p className="card-text">{item.description}</p> */}
                    <a href="./pay" className="btn btn-primary">Buy</a>
                  </div>
                </div>
            </div>))}
            </div> 
            </>
          )}

export default Womensclothing;