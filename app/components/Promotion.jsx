import Image from "next/image";

const Promotion=()=>{
    return(
        <div className="flex flex-row h-[80vh] w-full">
            <Image src="/landing-promotions.svg" className="" alt="promotions" height={200} width={200}/>
            <div className="flex flex-col items-start">
                <div className="">
                    <span><h1 className="text-customRed">MACC</h1><h1 className="">WEEKLY DICSOUNTS</h1></span>
                </div>
            </div>
        </div>
    )
}

export default Promotion;