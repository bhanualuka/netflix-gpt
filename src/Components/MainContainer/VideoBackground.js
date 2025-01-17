import { useSelector } from "react-redux";
import { useMovieTrialer } from "../../CustomHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const mTrailer = useSelector((store) => store.movies.movieTrailer);

  useMovieTrialer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          mTrailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
