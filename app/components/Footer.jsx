"use client";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { informationPages, webistePages } from "../utils/constants";
import { useRouter } from "next/navigation";

const Footer=()=>{
    const router=useRouter();

    return(
        <div className="w-full h-[48vh] flex flex-col items-center pb-9 pt-[5%]">
        <div className="w-full h-full flex flex-row items-start justify-evenly">
           <Image src="/macc-essentials-logo.svg" alt="logo" className='h-[13vh] w-[25%]' height={90} width={140}/>

            <div className="w-[20%] flex flex-col space-y-5">
               {webistePages.map((page,idx)=><p key={idx} className="cursor-pointer" onClick={()=>{router.push(page.link)}}>{page.label}</p>)}
            </div>

            <div className="w-[20%] flex flex-col space-y-5">
            {informationPages.map((info,idx)=><p key={idx}>{info.label}</p>)}
            </div>

            <div className="w-[35%] flex flex-col space-y-4">
                <p className="">Be the first to know about our biggest and best<br/> sales. We will never send more than one email a<br/> month.</p>
                
                <div className="w-[50%] flex flex-row">
                    <input type="email" placeholder="ENTER YOUR EMAIL" className="w-[100%] border-b-2 outline-none" />
                    <MdOutlineMail className="absolute h-8 w-6 left-[82%]" />
                </div>
                <div className="flex flex-row items-center space-x-6"> 
                    <Image src="/twitter.svg" alt="social-media-logo" height={40} width={40}/>
                    <Image src="/linkedin.svg" alt="social-media-logo" height={40} width={40}/>
                    <Image src="/facebook.svg" alt="social-media-logo" height={40} width={40}/>
                    <Image src="/insta.svg" alt="social-media-logo" height={40} width={40}/>
                </div>
            </div>

        </div>
        <p className="">All rights are reserved</p>
        </div>
    )
}

export default Footer;