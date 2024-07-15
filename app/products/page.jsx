import Image from "next/image";
import AllProducts from "../components/AllProducts";

const Products=()=>{

    return(
        <div className="">
            <Image src="/open-banner.svg" alt="banner" width={200} height={200} className="w-[100vw] h-[100vh]" />
            <AllProducts/>
        </div>
    )
}

export default Products;