import React from 'react';

const SingUp = () => {
    return (
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/7c1b8fab-6365-48b2-8a36-406a15841ec9/DE-en-20230515-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
             <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto text-white bg-black/75'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold text-center'>SingUp</h1>
                        <form className='flex flex-col w-full py-4'>
                            <input className='py-3 text-white my-2 bg-gray-700 rounded border-none outline-none' type="email" placeholder='Email' autoComplete='email'/>
                            <input className='py-3 text-white my-2 bg-gray-700 rounded border-none outline-none' type="password" placeholder='Password' autoComplete="current-password"/>
                        <button className='bg-red-600 py-3 my-3 rounded font-bold'>SingUp</button>
                        <div className='flex flex-col items-center justify-center gap-2'>
                        <p><input type="checkbox" /> Remember Me</p>
                        <p>Need Help?</p>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;