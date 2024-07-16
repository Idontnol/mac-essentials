"use client";
import {useDispatch,useSelector} from 'react-redux';
import {useRouter} from "next/navigation";

const Cart=()=>{
    const dispatch=useDispatch();
    const router=useRouter();
    const cartItems=useSelector((state)=>state.cart?.items);
    console.log(cartItems,"cartpage items");

    return(
        <div className="w-full pl-[2%]">
            <h1 className='text-2xl font-bold'>My Cart</h1>
            {cartItems.length>0? cartItems.map((item,idx)=>(
                <div className='' key={idx}>
                     {item.label} - {item.quantity} - ${item.totalPrice}
                </div>
            )):
            <div className='flex flex-col justify-center items-center w-full mt-[20vh]'>
                <h1 className='text-2xl font-bold'>YOUR CART IS EMPTY</h1>
                <button className='px-5 py-1 text-white bg-customBlue mt-3' onClick={()=>{router.push('/products')}}>Shop Now</button>
            </div>}
        </div>
    )
}

export default Cart;