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

// Get Post

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModel.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GetBreakfastPosts
export const getBreakfastPosts = async (req, res) => {
  try {
    const posts = await postModel.find({ category: /^breakfast/i });

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CreatePosts
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new postModel({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    category,
    shortDescription,
    recipeDescription,
    preperationTime,
    persons,
    likes,
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
      likes,
      recipeImage,
      _id: id,
    };

    await postModel.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  // if the user is allowed to like a post
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await postModel.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like the post
    post.likes.push(req.userId);
  } else {
    // dislike the post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await postModel.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await postModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
