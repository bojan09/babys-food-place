import React from "react";

// assets
import { searchIcon } from "../../../assets";

const SearchRecipes = () => {
  return (
    <div>
      {/* Search - Container */}
      <div className="flex justify-center items-center ">
        <input
          type="text"
          placeholder="Search recipes"
          className="outline-none border-none xs:ml-[-1px] bg-color_lightgray md:w-[65vw] h-[4rem] pl-4"
        />

        {/* Search Icon - Container */}
        <div className="bg-color_lightgray hover:bg-color_midgray rounded-lg flex justify-center items-center">
          <button
            className="py-[6px] md:px-10 xs:px-5 ml-[-5px]"
            onClick={() => {}}
          >
            <img
              src={searchIcon}
              alt="search_icon"
              className="w-[35px] h-[3.3rem] p-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipes;
