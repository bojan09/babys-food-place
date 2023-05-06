import React from "react";

import { Link } from "react-router-dom";

// components
import { UserRecipes } from "../../components/Recipes";

// assets
import { plusIcon } from "../../assets";

const MyRecipes = () => {
  return (
    <div className="grid md:justify-center items-center mb-[50%]">
      {/* My Recipes - Container */}

      {/* Heading & Add Recipe - Container */}
      <div className="flex justify-center items-center">
        <h1 className="textMainHead md:after:w-[59vw] xs:after:w-[32vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
          My Recipes
        </h1>

        {/* Add Recipe - Button Container */}
        <Link to="/create-recipes">
          <img
            src={plusIcon}
            alt="plus_icon"
            className="md:w-[40px] xs:w-[30px] sm:mb-[-1.5rem] ml-2 rounded-full p-2 bg-orange-400"
          />
        </Link>
      </div>

      {/* Categories & Recipe Items -  Container */}
      <div className="md:flex md:flex-col justify-evenly items-center">
        {/* Categories -  Container */}
        <div className="flex xs:justify-center md:justify-start items-center xs:gap-4 md:gap-[8rem] md:mt-[3rem] md:mb-4 text-color_orange font-bold">
          <h3 className="xs:my-1 ">Recipe Name</h3>
          <h3 className="xs:my-1 md:ml-[3vw]">Category</h3>
          <h3 className="xs:my-1 md:ml-[2vw]">Created On</h3>
          <h3 className="xs:my-1 md:ml-[25vw]">Delete</h3>
        </div>

        {/* UserRecipes Component */}
        <UserRecipes />
        <UserRecipes />
        <UserRecipes />
        <UserRecipes />
      </div>
    </div>
  );
};

export default MyRecipes;
