"use client";

import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import Footer from "../components/Footer";
import {useRouter} from 'next/navigation';

const Checkout=()=>{
    const router=useRouter();
    return(
        <div className="">
       
        <div className="flex flex-row justify-center h-[80vh]">
            <div className="flex flex-col items-start w-[50vw] h-full pt-[5vh] px-10 space-y-4">
                <h1 className="text-2xl font-bold">CHECKOUT</h1>
                <p className="font-bold">Delivery Address</p>
                <div className="flex flex-row items-center w-full space-x-6">
                    <input type="text" className="border-2 rounded border-gray-300 p-2 w-[45%]" placeholder="Charan" />
                    <input type="text" className="border-2 rounded border-gray-300 p-2 w-[45%]" placeholder="Katakam" />
                </div>
                <input type="" className="border-2 rounded border-gray-300 p-2 w-[93%]" placeholder="street 32, Parsor road, Daska" />
                <input type="" className="border-2 rounded border-gray-300 p-2 w-[93%]" placeholder="N/A" />
                <div className="flex flex-row items-center w-full space-x-6">
                    <input type="" className="border-2 rounded border-gray-300 p-2 w-[45%]" placeholder="522201" />
                    <input type="" className="border-2 rounded border-gray-300 p-2 w-[45%]" placeholder="Guntur" />
                </div>
                <input type="" className="border-2 rounded border-gray-300 p-2 w-[93%]" placeholder="+919989786348" />

                <div className="flex flex-row items-center justify-between pr-11 w-full">
                    <div className="flex flex-row items-center cursor-pointer" onClick={()=>{router.back()}}><FaChevronLeft /> <p>Go back to Cart</p>  </div>
                    <button className="text-white bg-customRed px-6 py-2 font-semibold rounded" onClick={()=>{router.push('/payment')}}>Save and Continue</button>
                </div>

            </div>
            <Image src="/checkout.svg" className="w-[45vw] mx-auto" alt="" height={200} width={200}/>
        </div>
        <Footer/>
        </div>
    )
}

export default Checkout;
