import express from "express";

// Route handlers
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);
// Create Post
router.post("/", createPost);

export default router;
