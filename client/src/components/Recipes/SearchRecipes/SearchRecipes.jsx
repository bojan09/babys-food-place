import React, { Component, useState } from "react";

// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// assets
import { searchIcon } from "../../../assets";

// actions
import { getPostBySearch } from "../../../actions/posts";

// components
import { Loader } from "../../../components";

// query
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchRecipes = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchRecipes, setSearchRecipes] = useState("");

  const searchPost = () => {
    if (searchRecipes.trim()) {
      dispatch(getPostBySearch({ searchRecipes }));
      navigate(`/posts/search?searchQuery=${searchRecipes || "none"}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    } else {
      <Loader />;
    }
  };

  /* Search - Container */
  return (
    <div className="flex justify-center items-center bg-color_lightgray rounded-full w-30vw">
      <input
        type="text"
        name="search"
        onChange={(e) => {
          setSearchRecipes(e.target.value);
        }}
        value={searchRecipes}
        onKeyDown={handleKeyPress}
        placeholder="Search recipes"
        className="outline-none border-none xs:w-[50vw] md:w-[60vw] bg-inherit"
      />

      {/* Search Icon - Container */}
      <button
        className="xs:py-[3px] md:py-[4px] xs:px-[.7rem] md:pl-[2rem] flex items-center gap-2 text-gray-800 bg-color_orange rounded-full p-4 text-xl font-semibold hover:bg-orange-500"
        onClick={searchPost}
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
