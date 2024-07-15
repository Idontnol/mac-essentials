"use client";

import Image from "next/image";
import '../globals.css';
import { newItems } from "../utils/constants";

const RelatedProducts=()=>{

    return(
        <div className="flex flex-col h-[90vh] pt-[3%]">
            <span className="font-bold text-3xl flex flex-row justify-center">
                <h1 className="">YOU MAY ALSO LIKE </h1>
            </span>
            <div className="flex flex-row items-center h-[82%] px-9 w-full relative justify-evenly">
                <Image src="/left.svg" alt="" className="cursor-pointer" height={70} width={70} onClick={() => { document.querySelector('.new-products').scrollBy({ left: -400, behavior: 'smooth' }); }}  />
                <div className="flex flex-row items-center h-[92%] overflow-y-hidden w-[92%] space-x-12 px-9 overflow-x-auto new-products relative">
                {
                newItems.map((item,idx)=>
                    <div className="flex flex-col items-center"  key={idx}>
                        <div className="bg-[#F3F3F3] h-[60%] w-[27vw] flex flex-row items-center justify-center p-10">
                            <Image src={`${item.image}`} alt="" className="max-h-[40vh] w-[80%] objectFit='cover'" height={20} width={20}/>
                        </div>
                        <p className="font-bold text-xl mt-5">{item.label}</p>
                    </div>
                )
                }
                </div>
                 <Image src="/right.svg" alt="" className=" cursor-pointer" height={70} width={70}  onClick={() => { document.querySelector('.new-products').scrollBy({ left: 400, behavior: 'smooth' }); }} />
            </div>
        </div>
    )
}

export default RelatedProducts;