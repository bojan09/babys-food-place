import React, { useState } from "react";

import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

// actions
import { createPost, updatePost } from "../../../actions/posts";

// fileBase for img upload
import FileBase from "react-file-base64";

// RoutePath
import { myRecipes } from "../../../constants";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// assets
import { blankImage } from "../../../assets";
import { useEffect } from "react";

const RecipesForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("profile"));

  // getPostForUpdate
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const [postData, setPostData] = useState({
    title: "",
    category: "",
    shortDescription: "",
    recipeDescription: "",
    preperationTime: "",
    persons: "",
    recipeImage: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setPostData({
      title: "",
      category: "",
      shortDescription: "",
      recipeDescription: "",
      preperationTime: "",
      persons: "",
      recipeImage: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentId) {
      dispatch(createPost({ ...postData, name: user?.results?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.results?.name })
      );
      clear();
    }
  };

  return (
    <div>
      {/* Recipes Form */}
      <form
        onSubmit={handleSubmit}
        className="md:flex gap-6 justify-center xs:text-center md:w-[70vw] mx-auto mb-[6%]"
      >
        {/* Image & Upload Button - Container */}
        <div className="xs:mt-5 md:mt-0">
          <label className="robotoSlab font-bold text-color_orange md:flex md:ml-[2px]">
            Recipe Image
          </label>
          <img
            src={postData.recipeImage ? postData.recipeImage : blankImage}
            alt={postData.recipeImage}
            className="xs:w-[310px] md:w-[280px] h-[230px] mx-auto rounded-md my-3"
          />

          <div className="input-file">
            <FileBase
              placeholder="Upload file"
              type="file"
              multiple={false}
              required
              onDone={({ base64 }) =>
                setPostData({ ...postData, recipeImage: base64 })
              }
            />
          </div>
        </div>

        {/* Recipe Title,Category, PrepTime, No.People, Short Desc - Container */}
        <div>
          {/* Recipe Title - Container */}
          <div className="md:flex flex-col justify-center xs:mt-4 md:mt-0 md:ml-1">
            <label className="robotoSlab font-bold text-color_orange">
              Recipe Title
            </label>
            <input
              type="text"
              placeholder="Homemade Pizza"
              className="xs:w-[300px] md:w-[580px]"
              name="title"
              value={postData.title}
              required
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </div>

          {/* Category, PrepTime, No.People - Container */}
          <div className="xs:mt-5 md:mt-0 md:flex justify-center items-center gap-5">
            {/* Category - Container */}
            <div className="grid justify-center">
              <label className="robotoSlab font-bold text-color_orange md:mt-[.5rem] ml-2">
                Category
              </label>
              <select
                name="category"
                value={postData.category}
                onChange={(e) =>
                  setPostData({ ...postData, category: e.target.value })
                }
                placeholder="Breakfast"
                required
                className="xs:w-[300px] md:w-[200px] mt-2"
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
            <div className="grid">
              <label className="robotoSlab font-bold text-color_orange">
                Preparation Time
              </label>
              <input
                type="number"
                placeholder="45"
                min="1"
                max="150"
                name="preperationTime"
                value={postData.preperationTime}
                onChange={(e) =>
                  setPostData({ ...postData, preperationTime: e.target.value })
                }
                required
                className="xs:w-[55px] md:w-[165px] mx-auto xs:mt-4 xs:mb-4 md:mt-1 md:mb-0"
              />
            </div>

            {/* No.People - Container */}
            <div className="grid">
              <label className="robotoSlab font-bold text-color_orange">
                No.People
              </label>
              <input
                type="number"
                placeholder="4"
                name="persons"
                value={postData.persons}
                onChange={(e) =>
                  setPostData({ ...postData, persons: e.target.value })
                }
                min="1"
                max="15"
                required
                className="xs:w-[45px] md:w-[165px] xs:my-2 xs:mb-8 md:my-0 md:mb-0 md:mt-1 mx-auto"
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
              name="shortDescription"
              value={postData.shortDescription}
              onChange={(e) =>
                setPostData({ ...postData, shortDescription: e.target.value })
              }
              required
              className="xs:w-[320px] md:w-[590px] xs:h-[220px] md:h-[180px]"
              placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage"
            ></textarea>

            {/* Save Recipe - Button */}
            {isDesktopOrLaptop && (
              <button
                type="submit"
                className="w-[180px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4 md:ml-[.6rem]"
              >
                save
              </button>
            )}
          </div>
        </div>

        {/* Recipe Description - Container */}
        <div className="xs:mt-3 md:mt-0 grid">
          <label className="robotoSlab font-bold text-color_orange md:flex">
            Recipe
          </label>
          <textarea
            name="recipeDescription"
            value={postData.recipeDescription}
            onChange={(e) =>
              setPostData({ ...postData, recipeDescription: e.target.value })
            }
            required
            className="xs:w-[320px] md:w-[460px] xs:h-[490px] md:h-[360px] xs:mx-auto md:mt-[-4.4rem]"
            placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures."
          ></textarea>

          {/* Save Recipe - Button */}
          {isMobile && (
            <Link to={myRecipes}>
              <button
                type="submit"
                className="xs:w-[310px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4"
              >
                save
              </button>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecipesForm;
