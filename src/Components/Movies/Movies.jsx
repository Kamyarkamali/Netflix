import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movies = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[150px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 duration-300 opacity-0 text-white hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute text-gray-400 top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute text-gray-400 top-4 left-4" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;
