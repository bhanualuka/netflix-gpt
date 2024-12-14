import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowTopRatedMovies } from "../utils/reduxtoolkit/slices/movieSlice";

export const useNowTopRatedMovies = () => {
  const dispatch = useDispatch();
  // Fetching Data From NowPopularMovies

  const FetchingNowTopRatedMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await Data.json();

    dispatch(addNowTopRatedMovies(json.results));
  };

  useEffect(() => {
    FetchingNowTopRatedMovies();
  }, []);
};
