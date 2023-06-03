import React, { useState, useEffect } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// RoutePath
import { updateRecipe } from "../../../constants";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import { RecipePosts, RecipeComments } from "../";

const RecipePostPage = ({ post }) => {
  const posts = useSelector((state) => state.posts);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  // user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const userLoggedIn = user?.result;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div>
      {/* Container */}
      <div className="md:flex justify-center xs:mx-2 md:mx-[9.4rem]">
        {/* Heading & Category - Container */}
        <div>
          {/* Heading - Container */}
          <h1 className="textSubHead xs:text-[26px] sm:text-[32px] robotoSlab xs:ml-4 md:ml-5 mb-[2rem] ">
            {post.title}
          </h1>

          {/* Recipe Picture - Container */}
          {isMobile && (
            <img
              src={post.recipeImage}
              alt={post.recipeImage}
              className="xs:w-[92vw] rounded-lg mx-auto mb-[1.5rem]"
            />
          )}

          {/* Category - Container */}
          <span className="rounded-[15px] bg-color_green text-white font-bold robotoSlab px-3 py-1 capitalize xs:ml-3 md:ml-5">
            {post.category}
          </span>
          {/* Recipe Paragraph - Container */}
          <p className="py-2 px-4 text-color_midgray md:px-5 md:text-[20px] xs:text-[18px] my-4 md:w-[60vw] md:h-[60vh]">
            {post.recipeDescription}
          </p>

          {!user ? (
            <p className="robotoSlab text-color_orange font-bold mb-4 ml-4">
              Recipe Made By: {post.name}
            </p>
          ) : (
            <div className="xs:flex md:block flex-col justify-center items-center md:mt-[3rem] md:ml-4">
              <p className="robotoSlab text-color_orange font-bold">
                Hi {post.name}. Does the recipe need any changes?
              </p>
              <Link to={updateRecipe}>
                <button className="xs:mt-10 md:mt-5 xs:w-[175px] md:w-[210px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] ">
                  Edit Recipe
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Recipe Picture - Container */}
        {isDesktopOrLaptop && (
          <img
            src={post.recipeImage}
            alt={post.recipeImage}
            className="md:w-[700px] md:h-[500px] rounded-lg mx-auto mt-[2rem]"
          />
        )}
      </div>

      {/* !---------- Recipe Comments ----------! */}
      <div className="flex justify-center items-center mb-[2rem] mt-[8rem]">
        <RecipeComments />
      </div>

      {/* You might also like - Container */}
      <div className="xs:mt-[5rem]">
        <h1 className="textMainHead md:after:w-[75vw] xs:after:w-[15vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
          You might also like
        </h1>

        {/* Recipes Posts - Container */}
        {isDesktopOrLaptop && (
          <div className="md:flex xs:grid justify-center items-center gap-8 mt-[2rem]">
            {!posts.length ? (
              <Loader />
            ) : (
              <div className="flex justify-center items-center flex-wrap gap-12">
                {posts
                  .sort((a, b) => a.starsCount - b.starsCount)
                  .map(
                    (post, index) =>
                      index < 6 && <RecipePosts key={post._id} post={post} />
                  )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Recipes Posts Carousel - Container */}
      {isMobile && (
        <Carousel
          swipeable={true}
          draggable={false}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={700}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}
        >
          <div className="grid justify-center items-center">
            <RecipePosts />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default RecipePostPage;
