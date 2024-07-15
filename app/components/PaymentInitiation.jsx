import Image from "next/image";
import { paymentOptions } from "../utils/constants";
import { FaChevronLeft } from "react-icons/fa6";

const PaymentInitiaion=(props)=>{
    const {setPaymentSuccess}=props;

    return(
        <div className="flex flex-row w-full h-[90vh]">
        <div className="flex flex-col w-[50%] pl-[6%]">
            <h1 className="text-2xl font-bold mb-4 pt-[3%]">PAYMENT</h1>
            <div className="flex flex-col space-y-2">
                {paymentOptions.map((payi,idx)=>(
                    <label htmlFor={idx} className="flex flex-rpw items-center border border-gray-300 w-[80%] py-1" key={idx}>
                        <input id={idx} type="radio" className="mx-3" name="payment-option" />
                        <p className="">{payi}</p>
                    </label>))}
            </div>
            <h1 className="text-2xl font-bold mb-4">Delivery Address</h1>
            <input type="" className="border border-gray-300 mb-4 py-1 pl-2 w-[80%]" placeholder="4568 8465 1258 6895" />
            <input type="" className="border border-gray-300 mb-3 py-1 pl-2 w-[80%]" placeholder="John Wick" />
            <div className="flex flex-row w-[80%] justify-between">
                <input type="" className="w-[45%] border border-gray-300 py-1 pl-2" placeholder="12/24" />
                <input type="" className="w-[45%] border border-gray-300 py-1 pl-2" placeholder="584" />
            </div>
            <div className="flex flex-row justify-between w-[80%] mt-7">
                <div className="flex flex-row items-center"><FaChevronLeft /> <p>Go back to Checkout</p>  </div>
                <button className="text-white bg-customRed w-[150px] rounded py-2" onClick={()=>{setPaymentSuccess(true)}}>Pay 40</button>
            </div>
        </div>
        <Image src="/payment-initiation.svg" className="w-[45%] mx-auto h-[85%]" alt="" height={300} width={300}/>
    </div>


    )
}

export default PaymentInitiaion;