import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

function Jewelery(){
    const [Jewelerydata, setCarouselData] = useState([]);


        useEffect(()=>{
          axios.get('https://fakestoreapi.com/products/category/jewelery')
          .then(response => response.data)
          .then(Jewelerydata => setCarouselData(Jewelerydata));
        },[])
       
        return(     
            <>  

        <div className='dis-product d-flex justify-content-center'>
          

            {Jewelerydata.map(item=>(<div  key={item.id}>

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

export default Jewelery;