import React from "react";

// components
import { RecipePosts } from "../../components/Recipes";

const Home = () => {
  return (
    <div className="relative xs:top-[6rem] sm:top-[13rem] sm:left-[12rem] xs:ml-5 sm:ml-[-2.7rem] flex justify-start items-center">
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px]">
        Fresh & New
      </h1>
      <div className="absolute top-[5rem] flex flex-wrap">
        <RecipePosts />
      </div>
    </div>
  );
};

export default Home;
