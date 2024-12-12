import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/reduxtoolkit/slices/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  // Fetching Data From NowPlayingMovies

  const FetchingNowPlayingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await Data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    FetchingNowPlayingMovies();
  }, []);
};
