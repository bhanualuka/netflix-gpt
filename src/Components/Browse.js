import { useNowPlayingMovies } from "../CustomHooks/useNowPlayingMovies";
import { useNowPopularMovies } from "../CustomHooks/useNowPopluarMovies";
import { useNowUpComingMovies } from "../CustomHooks/useNowUpCominngMovies";
import { useNowTopRatedMovies } from "../CustomHooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondContainer/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useNowUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
        Main Container 
           - Background Video
           - Video Title
       Secondary Container 
          - Movies List * n
           - Cards * n    
    */}
    </div>
  );
};

export default Browse;
