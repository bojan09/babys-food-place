import express from "express";

// Route handlers
import {
  getPostsBySearch,
  getPosts,
  getPost,
  getBreakfastPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

// Auth
import auth from "../middleware/auth.js";

const router = express.Router();

// Search Posts
router.get("/search", getPostsBySearch);

// Get All Posts
router.get("/", getPosts);

// Get Post
router.get("/:id", getPost);

// Get All Breakfast Posts
router.get("/breakfast", getBreakfastPosts);

// Create Post
router.post("/", auth, createPost);

// Update Post
router.patch("/update/:id", auth, updatePost);

// Update Post
router.patch("/:id/likePost", auth, likePost);

// Delete Post
router.delete("/:id", auth, deletePost);

export default router;
