import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";

const PaymentSuccessfull=(props)=>{
    const {setPaymentSuccess}=props;

    return(
        <div className="top-0 left-0 absolute z-2 bg-[rgba(0,0,1,0.4)] flex justify-center h-full w-full">
            <div className="flex flex-col mt-[10%] bg-white h-[60vh] w-[40vw]">
                <Image src="/payment-sucessfull.svg" alt="paymentsuccessfull" className="w-full h-[50%] objectFit='cover' layout='fill'" height={220} width={300}/>
                <RxCrossCircled className="absolute ml-[38vw] cursor-pointer text-black h-[25px] w-[23px] mt-1 mr-1" onClick={()=>{setPaymentSuccess(false)}} />
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-2xl font-bold">Order Placed Successfully</h1>
                    <p className="w-[60%] text-center">Your Order Has Been Placed Successfull We will Try To Ship It To Your Door Step As Soon We Can. Cheers</p>
                    <button className="bg-customBlue text-white w-[40%] p-x-6">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessfull;