import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../utils/reduxtoolkit/slices/movieSlice";

export const useNowPopularMovies = () => {
  const dispatch = useDispatch();
  // Fetching Data From NowPlayingMovies

  const FetchingNowPopularMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await Data.json();

    dispatch(addNowPopularMovies(json.results));
  };

  useEffect(() => {
    FetchingNowPopularMovies();
  }, []);
};
