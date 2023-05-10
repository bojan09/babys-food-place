import express from "express";

// Route handlers
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);
// Create Post
router.post("/", createPost);
// Create Post
router.patch("/:id", updatePost);
export default router;
