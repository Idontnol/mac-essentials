"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosHeart,IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {useDispatch,useSelector} from "react-redux";

const ProductInformation=()=>{
    const [favourite,setFavourite]=useState(false);
    const [description,setDescription]=useState(false);
    const [policy1,setPolicy1]=useState(false);
    const [policy2,setPolicy2]=useState(false);
    const [openCheckout,setOpenCheckout]=useState(false);
    const activeProduct=useSelector((state)=>state.products.activeProduct);
    const dispatch = useDispatch();

    const addToCart=()=>{

        setOpenCheckout(true);
        
    }

    return(
        <div className="flex flex-col h-[90vh] pt-[3vh]">
            {openCheckout &&<div className="bg-[#25b8a6] h-[5vh] flex flex-row justify-around items-center text-white">
            <p>SUCCESSFULLY ADDED TO CART. CHECKOUT NOW</p>
            <RxCross2 className="h-[23px] w-[24px] cursor-pointer" onClick={()=>{setOpenCheckout(false)}} />
            </div>}
            <p className="pl-6 mb-[2vh]">{`Home / Products / Product`}</p>
            <div className="flex flex-row pl-[7vw]">
                <div className="flex flex-col w-[10vw]">
                <Image src={activeProduct.image} alt="" className="max-h-[80%] w-[80%] objectFit='cover'" height={300} width={200}/>
                <Image src={activeProduct.image} alt="" className="max-h-[80%] w-[80%] objectFit='cover'" height={300} width={200}/>
                <Image src={activeProduct.image} alt="" className="max-h-[80%] w-[80%] objectFit='cover'" height={300} width={200}/>
                <Image src={activeProduct.image} alt="" className="max-h-[80%] w-[80%] objectFit='cover'" height={300} width={200}/>
                </div>
                <div className="w-[35vw] bg-[#F3F3F3] flex flex-row justify-center items-center p-1">
                    <Image src={activeProduct.image} alt="" className="max-h-[80%] w-[80%] objectFit='cover'" height={300} width={200}/>
                </div>
                <div className="flex flex-col items-start w-[50vw] px-4">
                    <div className="flex flex-row justify-between w-[84%]">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold ">{activeProduct.label}</h2>
                            <h3 className="text-customRed font-semibold text-xl">{activeProduct.cost}</h3>
                        </div>
                        {favourite?<IoIosHeart className="cursor-pointer ml-auto mt-2 h-[20px] w-[23px]" onClick={()=>{setFavourite(false)}} />
                        :<IoIosHeartEmpty className="cursor-pointer mt-2 ml-auto h-[20px] w-[23px] text-red-600" color="red" onClick={()=>{setFavourite(true)}} />}
                    </div>
                    <div className="flex flex-row mb-3 mt-3">
                        <div className="border-2 p-2  mr-3 border-gray-300">Choice 1</div>
                        <div className="border-2 p-2  mr-3 border-gray-300">Choice 2</div>
                        <div className="border-2 p-2  mr-3 border-gray-300">Choice 3</div>
                    </div>

                    <button className="bg-customBlue text-white block w-[60%] py-4 mb-2" onClick={()=>{addToCart()}}>ADD TO CART</button>
                    <p className="">{"product description"}Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet,</p>
                    
                    <span className='flex flex-row border-2 p-2 mb-3 border-gray-300 items-center justify-between cursor-pointer w-[70%] h-[5vh]' onClick={()=>setDescription(p=>!p)}>
                        <div className='sider'>
                    
                            <p style={{cursor:"pointer"}} className="font-bold ">Description</p>
                        </div>
                            {description?<MdOutlineKeyboardArrowUp className='h-[27px] w-[29px]' />:
                            < MdOutlineKeyboardArrowDown className='h-[27px] w-[29px]'/>}
                    </span>
                    <span className='flex flex-row border-2 p-2  mb-3 border-gray-300 items-center justify-between cursor-pointer w-[70%] h-[5vh]' onClick={()=>setPolicy1(p=>!p)}>
                        <div className=''>
                            <p style={{cursor:"pointer"}} className="font-bold ">RETURN POLICY</p>
                        </div>
                            {policy1?<MdOutlineKeyboardArrowUp className='h-[27px] w-[29px]' />:
                            < MdOutlineKeyboardArrowDown className='h-[27px] w-[29px]'/>}
                    </span>
                    <span className='flex flex-row items-center border-2 p-2 border-gray-300 justify-between cursor-pointer w-[70%] h-[5vh]' onClick={()=>setPolicy2(p=>!p)}>
                        <div className=''>
                            <p style={{cursor:"pointer"}} className="font-bold ">CITIZEN POLICY</p>
                        </div>
                            {policy2?<MdOutlineKeyboardArrowUp className='h-[27px] w-[29px]' />:
                            < MdOutlineKeyboardArrowDown className='h-[27px] w-[29px]'/>}
                    </span>
                   
                </div>
            </div>
        </div>
    )
}

export default ProductInformation;