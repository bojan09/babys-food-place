import express from "express";

// Route handlers
import {
  getPosts,
  getBreakfastPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);

// Get All Posts
router.get("/breakfast", getBreakfastPosts);

// Create Post
router.post("/", createPost);

// Update Post
router.patch("/:id", updatePost);

// Update Post
router.patch("/:id/likePost", likePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
