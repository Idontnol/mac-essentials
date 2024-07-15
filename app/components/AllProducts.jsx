"use client"

import Image from "next/image";
import { newItems, sectionData, testData } from "../utils/constants";
import { RiArrowDropUpLine,RiArrowDropDownLine } from "react-icons/ri";
import {useSelector,useDispatch} from "react-redux";

import { useState } from "react";

const AllProducts=()=>{
    const [sectionVisibilities, setSectionVisibilities] = useState(Array(sectionData.length).fill(false));
    const [activeTab,setActiveTab]=useState("");
    const [testData2,setTestData2]=useState(testData);
    // let testData2=testData;
    const toggleVisibility = (index) => {
        setSectionVisibilities((prevVisibilities) => {
          const updatedVisibilities = [...prevVisibilities];
          updatedVisibilities[index] = !prevVisibilities[index]; // Toggle state for clicked list
          return updatedVisibilities;
        });
      };
    const [productsData,setProductsData]=useState([]);
    const [sorte,setSorte]=useState("");
    const dispatch=useDispatch();
    

    const fetchData=async()=>{
        const url="https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
        const options={
            method:"GET",
            headers:{
                "accept": "application/json",
                "x-rapidapi-key":"8574c14188msh7f30f449f1ed5fcp1ad154jsn557b4e3b5207",
                "x-rapidapi-host":"real-time-amazon-data.p.rapidapi.com"
            }
        }
        const response = await fetch(url,options);
        const result= await response.json();
        if(response.ok){
            console.log("success");
        }
        console.log(result);
        console.log(result?.data);
        const data=result?.data.products;
        const dataFormat=data.map((product)=>({
            "label":product.product_title,
            "image":product.product_photo || "/body-spray.svg",
            "cost":product.product_price,
            "originalCost":product.product_original_price,
            "isBestSeller":product.is_best_seller,
            "delivery":product.delivery,
            "productUrl":product.product_url
        }))
        console.log(dataFormat);
        setProductsData(dataFormat);
    }
    // fetchData();
    if(productsData.length === 0){
        // fetchData();
        console.log("fetched products data");
    }
    const handleSort = (val) => {
        let sortedData;
        console.log(val);
        if (val === "lower-cost") {
            console.log("lower-cost");
            sortedData = [...testData2].sort((a, b) =>{
                const costA = a.cost? parseFloat(a.cost.replace(/\$|,/g, '')):0;
                const costB = b.cost?parseFloat(b.cost.replace(/\$|,/g, '')):0;
                return costA - costB
            });
        } else if (val === "higher-cost") {
            console.log("higher-cost");
            sortedData = [...testData2].sort((a, b) => {
                const costA = a.cost? parseFloat(a.cost.replace(/\$|,/g, '')):0;
                const costB = b.cost?parseFloat(b.cost.replace(/\$|,/g, '')):0;
                return costB-costA;
            });
        }
        console.log(sortedData);
        setTestData2(sortedData);
        setSorte(val);
    };

    const handleProductView=(item)=>{
        dispatch(setActiveProduct(item));
        router.push('/product-details');
    }

    return(
        <div className="flex flex-row">
            <div className="w-[20vw]">
            {sectionVisibilities&&
            sectionData.map((section,index)=>{
                return(
                    <>
                    <span className='flex flex-row items-center justify-between cursor-pointer w-[70%] mx-auto h-[5vh]' onClick={()=>toggleVisibility(index)}>
                        <div className='sider'>
                    
                            <p style={{cursor:"pointer"}} className="font-bold ">{section.header}</p>
                        </div>
                            {!sectionVisibilities[index]?<RiArrowDropDownLine className='h-[27px] w-[29px]' />:
                            <RiArrowDropUpLine className='h-[27px] w-[29px]'/>}
                    </span>
                    {sectionVisibilities[index]&& section.subHeaders && (<span className="flex flex-col items-start cursor-pointer mx-auto w-[70%]" >
                        {section.subHeaders.map((subheader,inde)=>
                        <div className="px-auto" key={inde}>
                            <p className={`${section-subheader} ${activeTab===subheader.path && 'inline bg-[#4287f5] text-white py-2 rounded-2'} hover:bg-[#ebebeb] cursor-pointer`} onClick={()=>{setActiveTab(`${subheader.path}`)}}>{subheader?.title}</p>
                        </div>)}
                    </span>)
                    }
                    </>
                )})
            }
            </div>
            <div className="w-[80vw] flex flex-col">
                <div className="flex flex-row">
                    <p className="text-[#231F20] font-bold text-2xl">Products</p>
                    <select className="border border-gray-300 ml-[76%] p-2 rounded-md focus:outline-none focus:ring-2 focus:black" 
                        value={sorte} onChange={(e)=>{handleSort(e.target.value)}}>
                        <option value="" disabled selected>Sort</option>
                        <option value="lower-cost">lower-cost</option>
                        <option value="higher-cost">higher-cost</option>
                    </select>
                </div>
                <div className="flex flex-row justify-evenly mb-7 items-center h-[82%] px-3 flex-wrap relative mt-3">
                {
                    testData2.map((item,idx)=>
                    <div className="flex flex-col items-center cursor-pointer" onClick={()=>{handleProductView(item)}}  key={idx}>
                        <div className="bg-[#F3F3F3] h-[80%] w-[22vw] flex flex-row items-center justify-center p-3">
                            <Image src={item.image} alt={item.label} className=" w-full layout='fill' objectFit='contain'" height={22} width={22}  />
                        </div>
                        <p className="font-bold text-xl mt-5 w-full p-2 overflow-y-auto">{`${item.label}`.split(" ").slice(0,5).join(" ")}</p>
                        <div className="flex flex-row">
                            <p className="line-through mr-1">{''}{item.originalCost}</p>
                            <p className="">{''}{item.cost}</p>
                        </div>
                    </div>
                )
                }
                {/* <image src="https://m.media-amazon.com/images/I/71dSn3QCY6L._AC_UL960_FMwebp_QL65_.jpg" className="h-full w-full layout='fill' objectFit='cover'"/> */}
                </div>

            </div>

        </div>
    )
}

export default AllProducts;