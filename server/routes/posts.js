import express from "express";

// Route handlers
import {
  getPostsBySearch,
  getPosts,
  getPost,
  getBreakfast,
  getBrunch,
  getLunch,
  getDinner,
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
router.get("/breakfast", getBreakfast);

// Get All Brunch Posts
router.get("/brunch", getBrunch);

// Get All Lunch Posts
router.get("/lunch", getLunch);

// Get All Dinner Posts
router.get("/dinner", getDinner);

// Create Post
router.post("/", auth, createPost);

// Update Post
router.patch("/update/:id", auth, updatePost);

// Update Post
router.patch("/:id/likePost", auth, likePost);

// Delete Post
router.delete("/:id", auth, deletePost);

export default router;
