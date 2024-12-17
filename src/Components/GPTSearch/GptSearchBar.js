import React from "react";
import { lang } from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.configLang?.changeName);

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-1/2 bg-black grid grid-cols-12 absolute rounded-md "
      >
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}
          className="p-4 m-4 col-span-9 rounded-md "
        />
        <button
          type="button"
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
