import React from "react";

// assets
import { searchIcon } from "../../../assets";

const SearchRecipes = () => {
  /* Search - Container */
  return (
    <div className="flex justify-center items-center bg-color_lightgray rounded-full w-30vw">
      <input
        type="text"
        placeholder="Search recipes"
        className="outline-none border-none xs:w-[50vw] md:w-[60vw] bg-inherit xs:h-[1.5rem] md:h-[3rem]"
      />

      {/* Search Icon - Container */}
      <button
        className="xs:py-[4px] md:py-[6px] xs:px-[.7rem] md:pl-[2rem] flex items-center gap-2 text-gray-800 bg-color_orange rounded-full p-4 text-xl font-semibold hover:bg-orange-500"
        onClick={() => {}}
      >
        Search
        <img
          src={searchIcon}
          alt="search_icon"
          className="w-[35px] h-[3.3rem] p-.8"
        />
      </button>
    </div>
  );
};

export default SearchRecipes;
