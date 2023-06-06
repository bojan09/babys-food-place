import axios from "axios";

// axios instant
const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");

export const fetchPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}`);

export const fetchBreakfastPosts = () => API.get(`/posts/breakfast`);

export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts,/${id}`, updatedPost);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const deletePost = (id) => API.delete(`/posts/${id}`);

// sign in
export const signIn = (formData) => API.post("/user/signin", formData);
// sign up
export const signUp = (formData) => API.post("/user/signup", formData);
