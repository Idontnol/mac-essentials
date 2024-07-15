"use client";

import Image from "next/image";
import {Poppins,Montserrat } from "next/font/google";
import {useRouter} from "next/navigation";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const LandingHeader=()=>{
    const router=useRouter();
    
    return(
        <div className="flex flex-row h-[80vh] items-center bg-[#F8F8F8] my-6">

            <div className="flex flex-col items-start w-[55%] justify-center pl-[6%] space-y-5">
                <h1 className={`text-5xl text-[#3A408C] font-bold`+`${poppins.className}`}>PROVIDING SERVICES<br/> AT YOUR DOOR</h1>
                <p className={`${montserrat.className}`}>MACC Essentials has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
                <button className="px-6 text-white py-4 bg-customRed font-bold" onClick={()=>{router.push('/products')}}>LEARN MORE</button>
            </div>
            <Image src="/boy-image.svg" alt="" className="w-[45%] h-[70%]" height={200} width={200}/>

        </div>
    )
}

export default LandingHeader;