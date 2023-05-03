import React from "react";

import { Link } from "react-router-dom";

// assets
import { arrowBackIcon } from "../../assets";

// components
import { RecipesForm } from "../../components/Recipes";

const CreateRecipes = () => {
  return (
    <div>
      {/* My Recipes - Container */}

      {/* Heading & Add Recipe - Container */}
      <div className="flex justify-center items-center">
        <h1 className="textMainHead md:after:w-[58vw] xs:after:w-[35vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
          My Recipes
        </h1>

        {/* Add Recipe - Button Container */}
        <Link to="/my-recipes">
          <img
            src={arrowBackIcon}
            alt="plus_icon"
            className="md:w-[40px] xs:w-[35px]  sm:mb-[-1.5rem] ml-2 rounded-full p-2 bg-orange-400"
          />
        </Link>
      </div>
      {/* Recipes Form */}
      <RecipesForm />
    </div>
  );
};

export default CreateRecipes;
