import axios from "axios";
import React, { useEffect, useState } from "react";

//Icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

//component
import Movies from "../Movies/Movies";

const Row = ({ title, fetchURL, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  //ScrollLeft
  const scrollLeft = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  //ScorollRight
  const scrollRight = () => {
    let sliders = document.getElementById("slider" + id);
    sliders.scrollLeft = sliders.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group duration-300">
        <MdChevronLeft
          onClick={scrollLeft}
          size={30}
          className="bg-white rounded-full opacity-50 hover:opacity-100 duration-300 cursor-pointer z-10  group-hover:block"
        />
        <div
          id={"slider" + id}
          className="w-full h-full overflow-x-hidden whitespace-nowrap scroll-smooth scroll-hide relative duration-300"
        >
          {movies.map((item, id) => (
            <Movies item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          size={30}
          className="bg-white  rounded-full opacity-50 hover:opacity-100 transition-all ease-linear duration-300 cursor-pointer group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
