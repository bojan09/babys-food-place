import axios from "axios";

// axios instant
const API = axios.create({ baseURL: "http://localhost:8080" });

export const fetchPosts = () => API.get("/posts");

export const fetchBreakfastPosts = () => API.get(`/posts/breakfast`);

export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts,/${id}`, updatedPost);

export const likePost = (id) => API.patch(`/posts,/${id}/likePost`);

export const deletePost = (id) => API.delete(`/posts,/${id}`);

// sign in
export const signIn = (formData) => API.post("/users/signin", formData);
// sign up
export const signUp = (formData) => API.post("/users/signup", formData);
