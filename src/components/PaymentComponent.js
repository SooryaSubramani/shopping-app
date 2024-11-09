
import { Link } from 'react-router-dom';
import Payment from './Payment';
import { useState} from 'react';



function PaymentComponent({page}){
    const [Payment, setPaymentData] = useState(page);
    console.log("Pay:", Payment);
return(
   
    <>
        <Link to="/payment"><button  class="btn btn-primary">Buy {page.price}</button></Link>


     </>
)}

export default PaymentComponent;