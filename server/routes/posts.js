import express from "express";

// Route handlers
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);

// Create Post
router.post("/", createPost);

// Update Post
router.patch("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
