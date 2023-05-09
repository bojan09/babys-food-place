import React from "react";

import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// RoutePath
import { createRecipe } from "../../constants";

// components
import { UserRecipes } from "../../components/Recipes";
import { Loader } from "../../components";

// assets
import { plusIcon } from "../../assets";

const MyRecipes = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="grid md:justify-center items-center mb-[10%]">
      {/* My Recipes - Container */}

      {/* Heading & Add Recipe - Container */}
      <div className="flex justify-center items-center">
        <h1 className="textMainHead md:after:w-[59vw] xs:after:w-[32vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
          My Recipes
        </h1>

        {/* Add Recipe - Button Container */}
        <Link to={createRecipe}>
          <img
            src={plusIcon}
            alt="plus_icon"
            className="md:w-[40px] xs:w-[30px] sm:mb-[-1.5rem] ml-2 rounded-full p-2 bg-orange-400"
          />
        </Link>
      </div>

      {/* Categories & Recipe Items -  Container */}
      <div className="md:flex md:flex-col justify-evenly items-center">
        {/* Categories -  Container */}
        <div className="md:grid xs:flex grid-cols-10 justify-center items-center  md:mt-[3rem] md:mb-4 text-color_orange font-bold gap-[4rem]">
          <h3 className="xs:my-1 md:m-0 md:text-center md:col-start-1 col-end-3 justify-self-start">
            Recipe Name
          </h3>
          <h3 className="xs:my-1 md:col-start-3 col-end-4 justify-self-start">
            Category
          </h3>
          <h3 className="xs:my-1 md:col-start-5 col-end-7 justify-self-start">
            Created On
          </h3>
          <h3 className="xs:my-1 md:col-start-8 col-end-10 justify-self-end">
            Delete
          </h3>
        </div>

        {/* UserRecipes Component */}
        {!posts.length ? (
          <Loader />
        ) : (
          <div className="flex justify-center items-center flex-wrap">
            {posts.map((post) => (
              <UserRecipes key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipes;
