import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../CustomHooks/useNowPlayingMovies";
import { useNowPopularMovies } from "../CustomHooks/useNowPopluarMovies";
import { useNowUpComingMovies } from "../CustomHooks/useNowUpCominngMovies";
import { useNowTopRatedMovies } from "../CustomHooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondContainer/SecondaryContainer";
import GptSearchPage from "./GPTSearch/GptSearchPage";

const Browse = () => {
  const toogoleGptSearch = useSelector(
    (store) => store.gptSearch.toogoleGptSearch
  );

  // Movies List
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useNowUpComingMovies();

  return (
    <div>
      <Header />
      {toogoleGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
