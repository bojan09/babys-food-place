import React from "react";

import { Link } from "react-router-dom";

// components
import { UserRecipes } from "../../components/Recipes";

// assets
import { plusIcon } from "../../assets";

const MyRecipes = () => {
  return (
    <div className="grid md:justify-center items-center">
      {/* My Recipes - Container */}

      {/* Heading & Add Recipe - Container */}
      <div className="flex justify-center items-center">
        <h1 className="textMainHead after:w-[60vw] xs:after:w-[32vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
          My Recipes
        </h1>

        {/* Add Recipe - Button Container */}
        <Link to="/create-recipes">
          <img
            src={plusIcon}
            alt="plus_icon"
            className="w-[35px] xs:w-[30px]  sm:mb-[-1.5rem] ml-2 rounded-full p-2 bg-orange-400"
          />
        </Link>
      </div>

      {/* Categories & Recipe Items -  Container */}
      <div className="flex md:flex-col justify-evenly items-center">
        {/* Categories -  Container */}
        <div className="md:flex md:gap-[10rem] md:mt-[3rem] md:mb-4 text-color_orange font-bold text-[18px]">
          <h3 className="xs:my-1">Recipe Name</h3>
          <h3 className="xs:my-1">Category</h3>
          <h3 className="xs:my-1">Created On</h3>
          <h3 className="xs:my-1  md:flex md:ml-[43.5%]">Delete</h3>
        </div>

        {/* UserRecipes Component */}
        <UserRecipes />
      </div>
    </div>
  );
};

export default MyRecipes;
