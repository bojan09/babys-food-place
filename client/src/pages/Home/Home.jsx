import React from "react";

// components
import { RecipePosts } from "../../components/Recipes";

const Home = () => {
  return (
    <div className="absolute sm:top-[13rem] sm:left-[10rem] xs:left-[2rem] xs:top-[6rem]">
      <h1 className="textMainHead xs:text-[28px] sm:text-[36px]">
        Fresh & New
      </h1>
      <div className="absolute top-[7rem] xs:top-[4.5rem] flex flex-wrap">
        <RecipePosts />
      </div>
    </div>
  );
};

export default Home;
