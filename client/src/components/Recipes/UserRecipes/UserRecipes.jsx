import React from "react";

import { Link } from "react-router-dom";

// assets
import { trashIcon } from "../../../assets";

const UserRecipes = () => {
  return (
    <div className=" md:w-[70vw] md:gap-[8rem] h-full mx-auto mt-4 py-4 rounded-md flex justify-center items-center  bg-white xs:w-[90vw] xs:gap-5 xs:text-[14px]">
      <Link to={"/update-recipe"}>
        {/* Recipe Title */}
        <h3 className="text-color_midgray font-bold md:text-[18px]">
          Homemade Pizza
        </h3>
      </Link>

      {/* Category */}
      <h3 className="rounded-[15px] bg-color_green text-white font-bold robotoSlab px-2.5 p-[.2rem] capitalize md:text-[18px]">
        Breakfast
      </h3>

      {/* Date Created */}
      <h3 className="text-color_midgray md:text-[18px]">23.04.2023</h3>

      {/* Delete Button */}
      <button className="xs:my-1 xs:w-[20px] md:w-[25px] md:ml-[25vw]">
        <img src={trashIcon} alt="delete recipe" className="w-[40px]" />
      </button>
    </div>
  );
};

export default UserRecipes;
