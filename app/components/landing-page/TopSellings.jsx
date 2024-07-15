"use client"

import Image from "next/image";
import '../../globals.css';
import { newItems } from "@/app/utils/constants";

const TopSellings=()=>{

    return(
        <div className="flex flex-row w-full h-[100vh] pb-[5vh] pt-[5vh]">
            <div className="w-[60%] flex flex-col">
                <div className="flex flex-row justify-between p-10">
                    <div className="flex flex-row"><h1 className="text-customRed font-bold text-2xl mr-2">MACC</h1><h1 className="font-bold text-2xl">TOP SELLINGS</h1></div>
                    <button className="bg-[#D2D2D2] px-4 py-1">VIEW ALL</button>
                </div>

                <div className="flex flex-row items-center h-[82%] px-9 w-full relative justify-evenly">
                <Image src="/left.svg" alt="" className="cursor-pointer" height={70} width={70} onClick={() => { document.querySelector('.new-products').scrollBy({ left: 400, behavior: 'smooth' }); }}  />
                <div className="flex flex-row items-center h-[82%] w-[92%] overflow-y-hidden space-x-12 px-9 overflow-x-auto new-products relative">
                {
                newItems.map((item,idx)=>
                    <div className="flex flex-col items-center"  key={idx}>
                        <div className="bg-[#F3F3F3] h-[60%] w-[27vw] flex flex-row items-center justify-center p-10">
                            <Image src={`${item.image}`} alt="" className="max-h-[40vh] w-[80%] objectFit='cover'" height={20} width={20}/>
                        </div>
                        <h1 className="font-bold text-xl mt-5">{item.label}</h1>
                        <p className="">{'$'}{item.cost}</p>
                    </div>
                )
                }
                </div>
            </div>

            </div>
            <Image src="/top-sellings.svg" alt="" className="w-[40vw] h-full" height={40} width={40}/>

        </div>
    )
}

export default TopSellings;