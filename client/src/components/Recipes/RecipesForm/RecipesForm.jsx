import React from "react";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// assets
import { meal_1 } from "../../../assets";

const RecipesForm = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="h-full">
      {/* Recipes Form */}
      <form className="md:flex justify-center items-center xs:text-center">
        {/* Image & Upload Button - Container */}
        <div className="mt-5">
          <label className="robotoSlab font-bold text-color_orange">
            Recipe Image
          </label>
          <img
            src={meal_1}
            alt="meal-1"
            className="w-[350px]  h-fit mx-auto rounded-md my-5"
          />
          <button className="line-border text-color_midgray rounded-lg xs:w-[340px] h-[45px] uppercase text-[18px] font-bold mb-8">
            Upload Image
          </button>
        </div>

        {/* Recipe Title,Category, PrepTime, No.People, Short Desc - Container */}
        <div className="mt-5">
          {/* Recipe Title - Container */}
          <label className="robotoSlab font-bold text-color_orange">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Homemade Pizza"
            className="xs:w-[350px] md:w-full text-center"
          />

          {/* Category, PrepTime, No.People - Container */}
          <div className="mt-5">
            <label className="robotoSlab font-bold text-color_orange">
              Category
            </label>
            <select
              name="recipeCategory"
              placeholder="Breakfast"
              className="xs:w-[350px] md:w-full text-center"
            >
              <option value="" disabled defaultChecked hidden>
                Breakfast
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="brunch">Brunch</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>

            <label className="robotoSlab font-bold text-color_orange">
              Preparation Time
            </label>
            <input
              type="number"
              placeholder="45"
              min="1"
              max="150"
              className="xs:w-[121px] md:w-full text-center xs:mt-6 xs:mb-4"
            />

            <label className="robotoSlab font-bold text-color_orange">
              No.People
            </label>
            <input
              type="number"
              placeholder="4"
              name="persons"
              min="1"
              max="15"
              className="xs:w-[90px] xs:my-4 xs:mb-8 md:w-full text-center"
            />
          </div>

          {/* Short Description - Container */}
          <label className="robotoSlab font-bold text-color_orange ">
            Short Description
          </label>
          <textarea
            className="xs:w-[350px] md:w-full xs:h-[310px]"
            placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage"
          ></textarea>
        </div>

        {/* Save Recipe - Button */}
        {isDesktopOrLaptop && (
          <button className="xs:w-[340px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4">
            save
          </button>
        )}

        {/* Recipe Description - Container */}
        <div className="mt-5">
          <label className="robotoSlab font-bold text-color_orange">
            Recipe
          </label>
          <textarea
            className="xs:w-[350px] md:w-full xs:h-[740px]"
            placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures."
          ></textarea>
          {/* Save Recipe - Button */}

          {isMobile && (
            <button className="xs:w-[340px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4">
              save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecipesForm;
