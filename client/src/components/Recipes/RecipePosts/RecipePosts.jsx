import React, { useState } from "react";

import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// RoutePath
import { recipeId } from "../../../constants";

// components
import Modal from "../../Modal/Modal";

// actions
import { likePost } from "../../../actions/posts";

// assets
import {
  plateIcon,
  starIcon,
  timeIcon,
  arrowsRightIcon,
} from "../../../assets";

const RecipePosts = ({ post }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="xs:w-[330px] md:w-[400px] h-fit bg-white">
      {/* Recipe Picture - Container */}
      <div className="relative">
        <img
          src={post.recipeImage}
          alt={post.recipeImage}
          className="w-[90vw] h-[260px] rounded-t-md cursor-pointer recipe_img"
          onClick={() => setOpenModal(true)}
        />
        <span className="absolute top-3 left-2 rounded-[15px] bg-color_green text-white font-bold robotoSlab px-3 py-1 capitalize">
          {post.category}
        </span>

        {/* Recipe Modal */}
        <Modal
          post={post}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>

      {/* Recipe Name and Short Description Container */}
      <div className="h-[10rem] break-words mb-[3.5rem]">
        <Link to={recipeId} onClick={window.scrollTo(0, 0)}>
          <h2 className=" py-3 px-5 textSubHead text-[20px] robotoSlab ">
            {post.title}
          </h2>
        </Link>

        {/* Recipe - Short Description */}
        <p className="pt-3 px-5 text-color_midgray text-ellipsis overflow-hidden h-full">
          {post.shortDescription}
        </p>
      </div>

      {/* Icons & ArrowRight Container */}
      <div className="flex justify-between py-3 p-4 bg-inherit">
        {/* Icons Container */}
        <div className="flex justify-center items-center gap-2">
          <img src={timeIcon} alt="cooking-time" className="w-[16.3px]" />
          <p className="text-[12px] text-color_darkgray robotoSlab font-bold">
            {post.preperationTime}
          </p>
          <img src={plateIcon} alt="plates" className="w-[16.3px]" />
          <p className="text-[12px] text-color_darkgray robotoSlab font-bold">
            {post.persons}
          </p>
          <button
            onClick={() => dispatch(likePost(post._id))}
            className="text-[12px] text-color_darkgray robotoSlab font-bold flex justify-center items-center gap-1"
          >
            <img src={starIcon} alt="stars" className="w-[16.3px]" />
            {post.starsCount}
          </button>
        </div>
        {/* ArrowsRight Container */}
        <div
          className="flex justify-center items-center w-[30px] h-[28px] bg-color_green p-1.5 rounded-[4px]"
          onClick={() => setOpenModal(true)}
        >
          <img
            src={arrowsRightIcon}
            alt="arrows-right"
            className="w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipePosts;
