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

// GetPosts
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
