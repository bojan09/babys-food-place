import React from "react";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// assets
import { meal_1 } from "../../../assets";

const RecipesForm = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div>
      {/* Recipes Form */}
      <form className="md:flex gap-6 justify-center xs:text-center md:w-[70vw] mx-auto">
        {/* Image & Upload Button - Container */}
        <div className="xs:mt-5 md:mt-0">
          <label className="robotoSlab font-bold text-color_orange md:flex md:ml-[2px]">
            Recipe Image
          </label>
          <img
            src={meal_1}
            alt="meal-1"
            className="xs:w-[310px] md:w-[280px] h-fit mx-auto rounded-md my-3"
          />
          <button className="line-border text-color_midgray rounded-lg xs:w-[300px] md:w-[270px] h-[45px] uppercase text-[18px] font-bold mb-6">
            Upload Image
          </button>
        </div>

        {/* Recipe Title,Category, PrepTime, No.People, Short Desc - Container */}
        <div>
          {/* Recipe Title - Container */}
          <div className="md:flex flex-col justify-center">
            <label className="robotoSlab font-bold text-color_orange">
              Recipe Title
            </label>
            <input
              type="text"
              placeholder="Homemade Pizza"
              className="xs:w-[300px] md:w-[580px] text-center"
            />
          </div>

          {/* Category, PrepTime, No.People - Container */}
          <div className="xs:mt-3 md:mt-0 md:flex justify-center items-center">
            {/* Category - Container */}
            <div className="md:grid">
              <label className="robotoSlab font-bold text-color_orange md:mt-[.5rem]">
                Category
              </label>
              <select
                name="recipeCategory"
                placeholder="Breakfast"
                className="xs:w-[300px] md:w-[200px] text-center mt-1"
              >
                <option value="" disabled defaultChecked hidden>
                  Breakfast
                </option>
                <option value="breakfast">Breakfast</option>
                <option value="brunch">Brunch</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            {/* Preperation Time - Container */}
            <div className="md:grid">
              <label className="robotoSlab font-bold text-color_orange">
                Preparation Time
              </label>
              <input
                type="number"
                placeholder="45"
                min="1"
                max="150"
                className="xs:w-[55px] md:w-[165px] text-center xs:mt-4 xs:mb-4 md:mt-1 md:mb-0"
              />
            </div>

            {/* No.People - Container */}
            <div className="md:grid">
              <label className="robotoSlab font-bold text-color_orange">
                No.People
              </label>
              <input
                type="number"
                placeholder="4"
                name="persons"
                min="1"
                max="15"
                className="xs:w-[45px] md:w-[165px] xs:my-2 xs:mb-8 md:my-0 md:mb-0 md:mt-1 text-center"
              />
            </div>
          </div>

          {/* Short Description & SaveButton (forDesktop) - Container */}
          <div className="md:flex flex-col justify-start items-start">
            {/* Short Description - Container */}
            <label className="robotoSlab font-bold text-color_orange ">
              Short Description
            </label>
            <textarea
              className="xs:w-[350px] md:w-[580px] xs:h-[220px] md:h-[180px]"
              placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage"
            ></textarea>

            {/* Save Recipe - Button */}
            {isDesktopOrLaptop && (
              <button className="w-[180px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4 md:ml-[.6rem]">
                save
              </button>
            )}
          </div>
        </div>

        {/* Recipe Description - Container */}
        <div className="xs:mt-3 md:mt-0">
          <label className="robotoSlab font-bold text-color_orange md:flex">
            Recipe
          </label>
          <textarea
            className="xs:w-[350px] md:w-[450px] xs:h-[460px] md:h-[350px]"
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
