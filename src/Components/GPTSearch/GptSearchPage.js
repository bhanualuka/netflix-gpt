import React from "react";
import { BG_URL } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-30 ">
        <img src={BG_URL} alt="background-image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
