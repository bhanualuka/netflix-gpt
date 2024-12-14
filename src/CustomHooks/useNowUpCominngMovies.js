import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowUpComingMovies } from "../utils/reduxtoolkit/slices/movieSlice";

export const useNowUpComingMovies = () => {
  const dispatch = useDispatch();
  // Fetching Data From NowUpcomingMoves

  const FetchingNowUpComingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await Data.json();

    dispatch(addNowUpComingMovies(json.results));
  };

  useEffect(() => {
    FetchingNowUpComingMovies();
  }, []);
};
