import React, { useState } from "react";

import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// actions
import { likePost } from "../../actions/posts";

// RoutePath
import { recipeId } from "../../constants";

// assets
import { plateIcon, starIcon, timeIcon, closeIcon, meal_1 } from "../../assets";

const Modal = ({ open, onClose, post }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  if (!open) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div className="modal md:w-[60vw]">
        {/* Recipe Heading */}
        <div className="flex justify-between items-center py-3 px-3 md:px-5">
          <Link to={recipeId} onClick={window.scrollTo(0, 0)}>
            <h1 className="textSubHead xs:text-[18px] sm:text-[32px] robotoSlab ">
              Recipe Title
            </h1>
          </Link>

          <button onClick={() => setOpenModal(false)}>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
            <img className="w-[30px] " src={closeIcon} alt="close" />
          </button>
        </div>
        <div className="flex">
          {/*Left side*/}

          {/* Image - Container*/}
          <div className="md:w-[40%]">
            <img
              src={post.recipeImage}
              alt="meal"
              className="xs:rounded-sm md:rounded-md md:w-[412px] h-[260px] md:pl-5"
            />

            {/* Category - Container*/}
            <div className="flex justify-between py-3 px-3 md:pl-5">
              <h2 className="text-color_green robotoSlab font-bold text-[18px] md:text-[22px]">
                Best Served For
              </h2>

              <span className="absolute top-[5.2rem] left-[1.6rem] rounded-[15px] bg-color_green text-white font-bold robotoSlab px-3 py-1 capitalize md:text-[18px] ">
                {post.category}
              </span>
            </div>

            {/* Short Description - Container*/}
            <p className="py-2 px-4 text-color_midgray md:px-5 md:text-[18px]">
              {post.shortDescription}
            </p>

            {/* PrepTime, Persons, Stars  - Container*/}
            <div className="flex gap-2 py-3 xs:px-10 md:px-5 md:pb-6">
              <img
                className="cook-time"
                src={timeIcon}
                alt="cooking time img"
              />
              <span className="text-[15px] md:text-[17px] text-color_darkgray robotoSlab font-bold">
                {post.preperationTime}
              </span>

              <img className="persons" src={plateIcon} alt="how many persons" />
              <span className="text-[15px] md:text-[17px] text-color_darkgray robotoSlab font-bold">
                {post.persons}
              </span>

              <button
                onClick={() => dispatch(likePost(post._id))}
                className="text-[15px] text-color_darkgray robotoSlab font-bold flex justify-center items-center gap-1"
              >
                <img src={starIcon} alt="stars" className="w-[20px]" />
                {post.starsCount}
              </button>
            </div>
          </div>

          {/*Right side*/}
          <div className="md:w-[60%]">
            {/* Recipe Description - Container */}
            <h2 className="xs:hidden md:block text-color_green robotoSlab font-bold  text-[22px] ml-5">
              Recipe Details
            </h2>
            <p className="xs:hidden md:block px-5 py-3 text-color_darkgray">
              {post.recipeDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
