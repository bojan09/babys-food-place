import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import { RecipePosts } from "../../../components/Recipes";
import { Loader } from "../../../components";

const DinnerRecipes = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {/* Fresh & New Recipes - Container */}
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px] text-center md:after:w-[65vw] xs:after:w-[55vw]">
        Dinner
      </h1>
      {!posts.length ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-center items-center flex-wrap gap-12">
          {posts.map((post) => (
            <RecipePosts key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DinnerRecipes;
