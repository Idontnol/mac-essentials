"use client"

import Image from "next/image";
import '../../globals.css';
import { newItems } from "@/app/utils/constants";
import {useRouter} from "next/navigation";

const WeeklyDiscounts=()=>{
    const router=useRouter();

    return(
        <div className="flex flex-row w-full h-[100vh] pb-[5vh] pt-[5vh]">
            <Image src="/weekly-discount.svg" alt="" className="w-[40vw] h-full" height={40} width={40}/>
            <div className="w-[60%] flex flex-col">
                <div className="flex flex-row justify-between p-10">
                    <div className="flex flex-row"><h1 className="text-customRed font-bold text-2xl mr-2">MACC</h1><h1 className="font-bold text-2xl">WEEKLY DISCOUNT</h1></div>
                    <button className="bg-[#D2D2D2] px-4 py-1" onClick={()=>{router.push('/products')}}>VIEW ALL</button>
                </div>

                <div className="flex flex-row items-center h-[82%] px-9 w-full relative justify-evenly">

                <div className="flex flex-row items-center h-[82%] w-[92%] overflow-y-hidden space-x-12 px-9 overflow-x-auto new-products2 relative">
                {
                newItems.map((item,idx)=>
                    <div className="flex flex-col items-center"  key={idx}>
                        <div className="bg-[#F3F3F3] h-[60%] w-[27vw] flex flex-row items-center justify-center p-10">
                            <Image src={`${item.image}`} alt="" className="max-h-[40vh] w-[80%] objectFit='cover'" height={20} width={20}/>
                        </div>
                        <h1 className="font-bold text-xl mt-5">{item.label}</h1>
                        <div className="flex flex-row">
                            <p className="line-through mr-1">{'$'}{item.originalCost}</p>
                            <p className="">{'$'}{item.cost}</p>
                        </div>
                       
                    </div>
                )
                }
                </div>
                <Image src="/right.svg" alt="" className=" cursor-pointer" height={70} width={70}  onClick={() => { document.querySelector('.new-products2').scrollBy({ left: 400, behavior: 'smooth' }); }} />
            </div>

            </div>
            

        </div>
    )
}


export default WeeklyDiscounts;