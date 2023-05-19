import React from 'react';
import {Link,useNavigate} from "react-router-dom";
import { UserAuth } from '../Context/Autch';
const Navbar = () => {
    const {user,logout}=UserAuth();

    const navigate=useNavigate()

    const handelLogout=async()=>{
        try{
            await logout()
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className='flex justify-between p-4 w-full z-[100] absolute max-w-[1640px] m-auto '>
            <Link to={"/"}>
            <h1 className='text-4xl text-red-600 font-bold'>NETFLIX</h1>
            </Link>
            {user?.email? 
            <div>
            <Link to="/acount">
            <button className='text-white pr-4 cursor-pointer'>Account</button>
            </Link>
            <Link to={"/sinup"}>
            <button onClick={handelLogout} className='px-6 py-2 bg-red-600 rounded cursor-pointer text-white'>Logout</button>
            </Link>
        </div> : 
        <div>
        <Link to={"/login"}>
        <button className='text-white pr-4 cursor-pointer'>Sing In</button>
        </Link>
        <Link to={"/sinup"}>
        <button className='px-6 py-2 bg-red-600 rounded cursor-pointer text-white'>Sing Up</button>
        </Link>
    </div>}
        </div>
    );
};

export default Navbar;