import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import { RecipePostPage } from "../../components/Recipes";
import { Loader } from "../../components";

const RecipePage = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {!posts.length ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-12">
          {posts.map((post) => (
            <RecipePostPage key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipePage;
