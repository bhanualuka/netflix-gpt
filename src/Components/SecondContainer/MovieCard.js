import React from "react";
import { POSTER_URL } from "../../utils/constants";

const MovieCard = ({ movies }) => {
  return (
    <div className="w-44 pr-6 cursor-pointer hover:w-48 transition-all duration-400">
      <img
        className="rounded-sm"
        src={POSTER_URL + movies?.poster_path}
        alt="movie-card"
      />
    </div>
  );
};

export default MovieCard;
