import React, { useState,useEffect } from 'react';
import axios from 'axios';

//Data
import request from '../Request';

const Main = () => {
    const [movies,setMovies]=useState([]);

    const movie=movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(request.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    // console.log(movie);

    const truTitle=(str,num)=>{
        if(str?.length > num){
            return str.slice(0,num) + "...";
        } else {
            return str
        }
    }

    return(
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute h-[550px] w-full bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='p-4 absolute top-[20%] md:p-8'>
                    <h2 className='text-3xl md:text-4xl font-bold'>{movie?.title}</h2>
                    <div className='my-4'>
                        <button className='border-gray-300 bg-white text-black py-2 px-5'>Play</button>
                        <button className='ml-4 border border-gray-300 py-2 px-4'>Whatch Later</button>
                    </div>
                    <p className='text-gray-400'>Released:{movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truTitle(movie?.overview,150)}</p>
                </div>
            </div>  
        </div>
    );
};

export default Main;