import React, { useState, useEffect } from "react";

// react-router-dom
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getPosts } from "../../actions/posts";

// components
import { RecipePostPage } from "../../components/Recipes";
import { Loader } from "../../components";

const RecipePage = () => {
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
