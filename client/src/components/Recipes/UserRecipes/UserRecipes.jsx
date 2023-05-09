import React from "react";

import { Link } from "react-router-dom";

// moment - date library
import moment from "moment";

// RoutePath
import { updateRecipe } from "../../../constants";

// assets
import { trashIcon } from "../../../assets";

const UserRecipes = ({ post }) => {
  return (
    <div className=" md:w-[70vw] md:gap-[8rem] h-full mx-auto mt-4 py-4 xs:px-3 md:px-0 rounded-md flex justify-center items-center  bg-white xs:w-[90vw] xs:gap-5 xs:text-[14px]">
      <div className="grid grid-cols-8 items-center justify-center">
        <Link to={updateRecipe}>
          {/* Recipe Title */}
          <h3 className="text-color_midgray font-bold md:text-[18px] w-[13rem] text-center">
            {post.title}
          </h3>
        </Link>

        {/* Category */}
        <h3 className="rounded-[15px] bg-color_green text-white font-bold robotoSlab px-2 my-1 capitalize col-start-2 col-end-4 justify-self-center md:ml-[2rem]">
          {post.category}
        </h3>

        {/* Date Created */}
        <h3 className="text-color_midgray md:text-[18px] col-start-4 col-end-6 justify-self-center md:mr-[5rem]">
          {moment(post.createdOn).fromNow()}
        </h3>
        {/* Delete Button */}
        <button className="xs:my-1 xs:w-[20px] md:w-[20px] col-start-7 col-end-7 justify-self-end md:mr-[2rem]">
          <img src={trashIcon} alt="delete recipe" className="w-[35px]" />
        </button>
      </div>
    </div>
  );
};

export default UserRecipes;
