import React from "react";
import MovieCard from "./MovieCard";
import "./Hide-Scroll-Bar.css";

const MoviesList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl text-white"> {title} </h1>
        <div className="flex overflow-x-scroll hide-scrollbar">
          <div className="flex">
            {movies &&
              movies.map((movie) => (
                <MovieCard key={movie.id} movies={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
