import React from "react";

// redux
import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

// components
import { RecipePosts } from "../../../components/Recipes";

import { Loader, Pagination } from "../../../components";

// query
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BreakfastRecipes = () => {
  const { posts } = useSelector((state) => state.posts);

  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px] text-center md:after:w-[62vw] xs:after:w-[49vw]">
        Breakfast
      </h1>
      {!posts?.length ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xs:grid-cols-1 justify-center items-center flex-wrap gap-12">
          {posts?.map((post) => (
            <RecipePosts key={post._id} post={post} />
          ))}
        </div>
      )}
      <Pagination page={Number(page) || 1} />
    </div>
  );
};

export default BreakfastRecipes;
