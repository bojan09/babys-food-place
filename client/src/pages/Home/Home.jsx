import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import { RecipePosts, SearchRecipes } from "../../components/Recipes";
import { Loader } from "../../components";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {/* Search Recipes */}
      <SearchRecipes />

      {/* Fresh & New Recipes - Container */}
      <h1 className="textMainHead md:after:w-[59vw] xs:text-[28px] sm:text-[36px] text-center">
        Fresh & New
      </h1>

      {console.log(posts)}
      <div className=" flex justify-center items-center flex-wrap gap-12">
        {!posts.length ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-center items-center flex-wrap gap-12">
            {posts
              .sort((a, b) => a.starsCount - b.starsCount)
              .map(
                (post, index) =>
                  index < 3 && <RecipePosts key={post._id} post={post} />
              )}
          </div>
        )}
      </div>

      {/*  Most Popular Recipes - Container */}
      <h1 className="textMainHead md:after:w-[57vw] xs:after:w-[32vw] xs:text-[28px] sm:text-[36px] sm:mt-[4rem] xs:mt-[4rem] text-center">
        Most Popular
      </h1>
      {!posts.length ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-center items-center gap-12">
          {posts
            .sort((a, b) => a.starsCount - b.starsCount)
            .map(
              (post, index) =>
                index < 6 && <RecipePosts key={post._id} post={post} />
            )}
        </div>
      )}
    </div>
  );
};

export default Home;
