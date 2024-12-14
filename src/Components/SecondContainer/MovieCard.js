import React from "react";
import { POSTER_URL } from "../../utils/constants";

const MovieCard = ({ movies }) => {
  return (
    <div className="w-44 pr-2">
      <img
        className="rounded-sm"
        src={POSTER_URL + movies?.poster_path}
        alt="movie-card"
      />
    </div>
  );
};

export default MovieCard;
