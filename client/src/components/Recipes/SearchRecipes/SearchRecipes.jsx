import React from "react";

// react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";

// jwt
import decode from "jwt-decode";

// redux
import { useDispatch } from "react-redux";

// assets
import { searchIcon } from "../../../assets";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchRecipes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  /* Search - Container */
  return (
    <div className="flex justify-center items-center bg-color_lightgray rounded-full w-30vw">
      <input
        type="text"
        placeholder="Search recipes"
        className="outline-none border-none xs:w-[50vw] md:w-[60vw] bg-inherit"
      />

      {/* Search Icon - Container */}
      <button
        className="xs:py-[3px] md:py-[4px] xs:px-[.7rem] md:pl-[2rem] flex items-center gap-2 text-gray-800 bg-color_orange rounded-full p-4 text-xl font-semibold hover:bg-orange-500"
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
