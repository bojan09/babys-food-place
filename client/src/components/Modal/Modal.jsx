import React, { useState } from "react";

import { Link } from "react-router-dom";

// RoutePath
import { recipeId } from "../../constants";

// assets
import { plateIcon, starIcon, timeIcon, closeIcon, meal_1 } from "../../assets";

const Modal = ({ open, onClose }) => {
  const [openModal, setOpenModal] = useState(false);
  if (!open) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div className="modal md:w-[70vw]">
        {/* Recipe Heading */}
        <div className="flex justify-between items-center py-3 px-3 md:px-5">
          <Link to={recipeId}>
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
          <div className="md:w-[40%]">
            <img
              src={meal_1}
              alt="meal"
              className="xs:rounded-sm md:rounded-md md:w-[412px] md:pl-5"
            />
            <div className="flex justify-between py-3 px-3 md:pl-5">
              <h2 className="text-color_green robotoSlab font-bold text-[18px] md:text-[22px]">
                Best Served For
              </h2>
              <span className="rounded-[15px] bg-color_green text-white font-bold robotoSlab px-3 py-1 capitalize md:text-[18px] ">
                category
              </span>
            </div>
            <p className="py-2 px-4 text-color_midgray md:px-5 md:text-[18px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>
            <div className="flex gap-2 py-3 xs:px-10 md:px-5 md:pb-6">
              <img
                className="cook-time"
                src={timeIcon}
                alt="cooking time img"
              />
              <span className="text-[15px] md:text-[17px] text-color_darkgray robotoSlab font-bold">
                32 min
              </span>

              <img className="persons" src={plateIcon} alt="how many persons" />
              <span className="text-[15px] md:text-[17px] text-color_darkgray robotoSlab font-bold">
                4 persons
              </span>

              <img className="stars" src={starIcon} alt="how many stars" />
              <span className="text-[15px] md:text-[17px] text-color_darkgray robotoSlab font-bold">
                2
              </span>
            </div>
          </div>
          {/*Right side*/}
          <div className="md:w-[60%]">
            <h2 className="xs:hidden md:block text-color_green robotoSlab font-bold  text-[22px] ml-5">
              Recipe Details
            </h2>
            <p className="xs:hidden md:block px-5 py-3 text-color_darkgray">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
