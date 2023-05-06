import React from "react";

// components
import { RecipePosts } from "../../../components/Recipes";

const DinnerRecipes = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {/* Fresh & New Recipes - Container */}
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px] text-center md:after:w-[65vw] xs:after:w-[55vw]">
        Dinner
      </h1>
      <div className=" flex justify-center items-center flex-wrap gap-12">
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
      </div>
    </div>
  );
};

export default DinnerRecipes;
