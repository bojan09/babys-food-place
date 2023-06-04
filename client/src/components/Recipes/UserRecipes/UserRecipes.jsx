import React from "react";

import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// actions
import { deletePost } from "../../../actions/posts";

// date formating package from npm
import dateFormat from "dateformat";

// RoutePath
import { updateRecipe } from "../../../constants";

// assets
import { trashIcon } from "../../../assets";

const UserRecipes = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className=" md:w-[70vw] md:gap-[8rem] h-full mx-auto mt-4 py-4 rounded-md flex justify-center items-center  bg-white xs:w-[95vw] xs:gap-5 xs:text-[14px]">
      <div className="md:grid xs:flex md:grid-cols-8 items-center justify-between gap-[1rem]">
        <Link to={updateRecipe} onClick={() => setCurrentId(post._id)}>
          {/* Recipe Title */}
          <h3 className="text-color_midgray font-bold md:text-[18px] md:w-[13rem] xs:w-[5rem] xs:text-start md:text-center">
            {post.title}
          </h3>
        </Link>

        {/* Category */}
        <h3 className="rounded-[15px] bg-color_green text-white font-bold robotoSlab px-2 py-1 capitalize col-start-2 col-end-4 justify-self-center md:ml-[2rem]">
          {post.category}
        </h3>

        {/* Date Created */}
        <h3 className="text-color_midgray md:text-[18px] col-start-4 col-end-6 justify-self-center xs:mr-[.6rem] md:mr-[5rem] xs:w-[5rem] md:w-[7.2rem]">
          {dateFormat(post.createdAt, "dd.mm.yyyy")}
        </h3>
        {/* Delete Button */}
        <button
          onClick={() => dispatch(deletePost(post._id))}
          type="submit"
          className="xs:my-1 w-[1.2rem] col-start-7 col-end-7 justify-self-end md:mr-[-2.3rem]"
        >
          <img src={trashIcon} alt="delete recipe" className="w-[35px]" />
        </button>
      </div>
    </div>
  );
};

export default UserRecipes;
