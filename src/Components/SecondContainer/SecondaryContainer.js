import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-40">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Now Popular"} movies={movies.nowPopularMovies} />
          <MoviesList
            title={"Now TopRated"}
            movies={movies.nowTopRatedMovies}
          />
          <MoviesList
            title={"Now Upcoming"}
            movies={movies.nowUpComingMovies}
          />

          {/*  <MoviesList title={"Now Playing"} movies={movies} />
          <MoviesList title={"Now Playing"} movies={movies} />
          <MoviesList title={"Now Playing"} movies={movies} />
          <MoviesList title={"Now Playing"} movies={movies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
