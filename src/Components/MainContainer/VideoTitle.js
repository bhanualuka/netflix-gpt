import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-6xl"> {title} </h1>
      <p className="py-6  text-lg w-1/4 ">{overview}</p>
      <div className="">
        <button
          className="p-2 px-12  h-12 text-lg rounded-lg  text-black bg-white hover:bg-opacity-50
         "
        >
          {/* <img className=" " src={PLAY_BUTTON} alt="play-btn" /> */}
          Play
        </button>
        <button
          className="p-2 px-5 text-lg  h-12 rounded-lg ml-3 bg-gray-500 text-white
            bg-opacity-50 hover:bg-opacity-50
         "
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
