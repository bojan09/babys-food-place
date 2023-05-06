import React from "react";

// components
import { RecipePosts } from "../../../components/Recipes";

const BrunchRecipes = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {/* Fresh & New Recipes - Container */}
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px] text-center md:after:w-[64vw] xs:after:w-[55vw]">
        Brunch
      </h1>
      <div className=" flex justify-center items-center flex-wrap gap-12">
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
      </div>
    </div>
  );
};

export default BrunchRecipes;
