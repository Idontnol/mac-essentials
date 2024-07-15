"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import PaymentInitiaion from "../components/PaymentInitiation";
import PaymentSuccessfull from "../components/PaymentSuccessfull";

const Payment=()=>{
    const [paymentSucess,setPaymentSuccess]=useState(false);
    
    return(
        <div className="">
            <PaymentInitiaion setPaymentSuccess={setPaymentSuccess} />
            {paymentSucess && <PaymentSuccessfull setPaymentSuccess={setPaymentSuccess} />}
            <Footer/>
        </div>
    )
}

export default Payment;