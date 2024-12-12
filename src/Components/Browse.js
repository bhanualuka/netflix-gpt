import { useNowPlayingMovies } from "../CustomHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

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
