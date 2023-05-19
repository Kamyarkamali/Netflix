import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 w-full z-[100] absolute max-w-[1640px] m-auto '>
            <Link to={"/"}>
            <h1 className='text-4xl text-red-600 font-bold'>NETFLIX</h1>
            </Link>
            <div>
                <Link to={"/singup"}>
                <button className='text-white pr-4 cursor-pointer'>Sing In</button>
                </Link>
                <Link to={"/login"}>
                <button className='px-6 py-2 bg-red-600 rounded cursor-pointer text-white'>Sing Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;