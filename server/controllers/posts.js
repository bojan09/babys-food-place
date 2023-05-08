import postModel from "../models/postModel.js";

// GetPosts
export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    return error;
  }
};

// GetPosts
export const createPost = (req, res) => {
  res.send("Hello World, create post");
};
