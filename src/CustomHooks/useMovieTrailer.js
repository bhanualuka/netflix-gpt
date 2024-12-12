import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/reduxtoolkit/slices/movieSlice";
import { useEffect } from "react";

export const useMovieTrialer = (movieId) => {
  const dispatch = useDispatch();

  const FetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const movieTriler = filterData.length
      ? filterData[0]
      : filterData.results[0];
    dispatch(addMovieTrailer(movieTriler));
  };

  useEffect(() => {
    FetchMovieTrailer();
  }, []);
};
