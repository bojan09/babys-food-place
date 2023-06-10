import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

// components
import Modal from "../../Modal/Modal";

// actions
import { getPost, likePost } from "../../../actions/posts";

// assets
import {
  plateIcon,
  starIcon,
  timeIcon,
  arrowsRightIcon,
} from "../../../assets";

const RecipePosts = ({ post }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const postDetails = () => navigate(`/posts/${post._id}`);

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

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
        <h2
          onClick={(window.scrollTo(0, 0), postDetails)}
          className=" py-3 px-5 textSubHead text-[20px] robotoSlab cursor-pointer "
        >
          {post.title}
        </h2>

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

          {/* Star/Like Button */}
          <button
            onClick={() => dispatch(likePost(post._id))}
            disabled={!user?.result}
            className="text-[12px] text-color_darkgray robotoSlab font-bold flex justify-center items-center gap-1"
          >
            <img src={starIcon} alt="stars" className="w-[16.3px]" />
            {post.likes.find(
              (like) => like === (user?.googleId?._id || user?.result?._id)
            )
              ? post.likes.length
              : post.likes.length}
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
