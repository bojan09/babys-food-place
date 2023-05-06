import React from "react";

// components
import { RecipePosts } from "../../components/Recipes";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {/* Fresh & New Recipes - Container */}
      <h1 className="textMainHead md:after:w-[61vw] xs:text-[28px] sm:text-[36px] text-center">
        Fresh & New
      </h1>
      <div className=" flex justify-center items-center flex-wrap gap-12">
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
      </div>

      {/*  Most Popular Recipes - Container */}
      <h1 className="textMainHead md:after:w-[57vw] xs:after:w-[32vw] xs:text-[28px] sm:text-[36px] sm:mt-[4rem] xs:mt-[4rem] text-center">
        Most Popular
      </h1>
      <div className=" flex justify-center items-center flex-wrap gap-12">
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
      </div>
    </div>
  );
};

export default Home;
