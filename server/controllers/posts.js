import mongoose from "mongoose";

// model
import postModel from "../models/postModel.js";

// GetPosts
export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: message.error });
  }
};

// CreatePosts
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postModel(post);
  try {
    await newPost.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: message.error });
  }
};

// UpdatePosts
// export const updatePost = async (req, res) => {
//   const { id: _id } = req.params;
//   const post = req.body;
//   try {
//     if (mongoose.Types.objectId.isValid(_id))
//       return res.status(404).send("No post with that id");

//     const updatePost = await PostModel.findByIdAndUpdate(...post, _id, {
//       new: true,
//     });
//     res.json(updatePost);
//   } catch (error) {
//     res.status(409).json({ message: error });
//   }
// };

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    category,
    shortDescription,
    recipeDescription,
    preperationTime,
    persons,
    starsCount,
    recipeImage,
  } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {
      title,
      category,
      shortDescription,
      recipeDescription,
      preperationTime,
      persons,
      starsCount,
      recipeImage,
      _id: id,
    };

    await postModel.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
  } catch (error) {
    return error;
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await postModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    return error;
  }
};
