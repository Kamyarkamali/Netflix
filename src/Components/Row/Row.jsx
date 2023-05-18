import axios from 'axios';
import React, { useEffect, useState } from 'react';

//Icons
import { MdChevronLeft,MdChevronRight } from "react-icons/md";

//component
import Movies from '../Movies/Movies';

const Row = ({title,fetchURL}) => {
    const [movies,setMovies]=useState([]);


    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft size={30} className='bg-white rounded-full opacity-50 hover:opacity-100 duration-300 cursor-pointer z-10 hidden group-hover:block'/>
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item,id)=>(
                        <Movies item={item} key={id}/>
                    ))}
                </div>
                <MdChevronRight size={30} className='bg-white rounded-full opacity-50 hover:opacity-100 duration-300 cursor-pointer z-10 hidden group-hover:block'/>
            </div>
            </>
    );
};

export default Row;