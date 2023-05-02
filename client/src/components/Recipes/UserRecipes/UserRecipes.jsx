import React from "react";

import { Link } from "react-router-dom";

// assets
import { trashIcon } from "../../../assets";

const UserRecipes = () => {
  return (
    <div className="w-[90vw] h-full mx-auto mt-4 py-4 rounded-md flex justify-center items-center gap-3 bg-white text-[14px]">
      <Link to={"/update-recipe"}>
        {/* Recipe Title */}
        <h3 className="xs:ml-[1rem]">Recipe Title</h3>
      </Link>

      {/* Category */}
      <h3 className="xs:ml-[3.4rem]">Recipe Category</h3>

      {/* Date Created */}
      <h3 className="xs:mr-[1.5rem]">23.04.2023</h3>

      {/* Delete Button */}
      <button className="xs:my-1 xs:w-[20px] xs:mr-6 md:w-[25px]">
        <img src={trashIcon} alt="delete recipe" className="w-[40px]" />
      </button>
    </div>
  );
};

export default UserRecipes;
