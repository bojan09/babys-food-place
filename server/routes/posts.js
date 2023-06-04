import express from "express";

// Route handlers
import {
  getPosts,
  getUserPosts,
  getBreakfastPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

// Auth
import auth from "../middleware/auth.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);

// Get All User Posts
router.get("/user/:id", auth, getUserPosts);

// Get All Posts
router.get("/breakfast", getBreakfastPosts);

// Create Post
router.post("/", auth, createPost);

// Update Post
router.patch("/:id", auth, updatePost);

// Update Post
router.patch("/:id/likePost", auth, likePost);

// Delete Post
router.delete("/:id", auth, deletePost);

export default router;
