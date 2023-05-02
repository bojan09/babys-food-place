import React from "react";

import { Link } from "react-router-dom";

// assets
import { trashIcon } from "../../../assets";

const UserRecipes = () => {
  return (
    <div className="h-full md:w-full xs:w-[45vw] md:flex md:justify-around items-center md:gap-[8rem] bg-white text-[18px] xs:text-center ">
      <Link to={"/update-recipe"}>
        {/* Recipe Title */}
        <h3 className="">Recipe Title</h3>
      </Link>

      {/* Category */}
      <h3 className="">Recipe Category</h3>

      {/* Date Created */}
      <h3 className="">23.04.2023</h3>

      {/* Delete Button */}
      <button className="xs:my-1 xs:w-[20px] md:w-[25px]">
        <img src={trashIcon} alt="delete recipe" className="w-[40px]" />
      </button>
    </div>
  );
};

export default UserRecipes;
