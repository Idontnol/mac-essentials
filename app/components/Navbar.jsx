"use client";
import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const Navbar=()=>{
    const router = useRouter();

    return(
        <div className="w-[100vw]  flex flex-col">
            <div className="flex flex-row justify-end items-center space-x-6 mr-10 border-b-2 border-[#D2D2D2] py-1 text-[#4A4B4D]">
                <p className="cursor-pointer hover:text-black" onClick={()=>{ router.back()}}>Return</p>
                <p className="cursor-pointer hover:text-black">Help</p>
                <p className="cursor-pointer hover:text-black">Register / Sign In</p>
            </div>
            <div className="flex flex-row items-center space-x-4 justify-evenly pt-4">
                <div className="">
                <IoSearchOutline  style={{height:"32px",width:"32px"}} className='cursor-pointer' />
                </div>
                <div className="flex flex-row items-center w-[60%] justify-evenly">
                    <p className='cursor-pointer' onClick={()=>{router.push('/products')}}>SHOP</p>
                    <p className='cursor-pointer'>ESSENTIALS</p>
                    <Image onClick={()=>{router.push('/')}} src="/macc-essentials-logo.svg" alt="logo" className='cursor-pointer' height={90} width={140}/>
                    <p className='cursor-pointer'>BEST SELLERS</p>
                    <p className='cursor-pointer'>ABOUT US</p>
                </div>
                <div className="flex flex-row items-center space-x-7">
                    <CiUser className='cursor-pointer' style={{height:"26px",width:"18px"}} />
                    <Image src="/notification.svg" alt="notification" height={24} width={23} className='mb-6 cursor-pointer'/>
                    <HiOutlineShoppingBag className='cursor-pointer' onClick={()=>{router.push('/checkout')}} style={{height:"24px",width:"19px"}} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;