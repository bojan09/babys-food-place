import React from "react";

// components
import { RecipePosts } from "../../components/Recipes";

const Home = () => {
  return (
    <div className="absolute sm:top-[13rem] sm:left-[19rem] xs:left-[1.3rem] xs:top-[6rem]">
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px] sm:ml-4">
        Fresh & New
      </h1>
      <div className="absolute top-[7rem] xs:top-[4.5rem] flex justify-center items-center gap-10 flex-wrap">
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
        <RecipePosts />
      </div>
    </div>
  );
};

export default Home;
