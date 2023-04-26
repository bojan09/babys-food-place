import React, { useState } from "react";

// components
import Modal from "../../Modal/Modal";

// assets
import {
  plateIcon,
  starIcon,
  timeIcon,
  arrowsRightIcon,
  meal_1,
} from "../../../assets";

// recipe mock data
import { recipesData } from "../../../constants";

const RecipePosts = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-[373px] h-fit bg-white">
      {/* Recipe Picture - Container */}
      <div>
        <span>category</span>
        <img src={meal_1} alt="recipe-1" className="w-[373px] h-[234px]" />

        {/* Recipe Modal */}
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>

      {/* Recipe Name and Short Description Container */}
      <h2 className="p-3">Recipe name</h2>
      <p className="p-3">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using ‘Content here, content here’, making it
        look like readable English.
      </p>

      {/* Icons & ArrowRight Container */}
      <div className="flex justify-between py-5 p-4 bg-inherit">
        {/* Icons Container */}
        <div className="flex justify-center items-center gap-3">
          <img src={timeIcon} alt="cooking-time" className="w-[16.3px]" />
          <p className="text-[12px] text-color_darkgray robotoSlab font-bold">
            45min
          </p>
          <img src={plateIcon} alt="plates" className="w-[16.3px]" />
          <p className="text-[12px] text-color_darkgray robotoSlab font-bold">
            4 persons
          </p>
          <img src={starIcon} alt="stars" className="w-[16.3px]" />
          <p className="text-[12px] text-color_darkgray robotoSlab font-bold">
            2
          </p>
        </div>
        {/* ArrowsRight Container */}
        <div className="flex justify-center items-center w-[30px] h-[28px] bg-color_green p-1 rounded-sm">
          <img src={arrowsRightIcon} alt="arrows-right" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default RecipePosts;
