import axios from "axios";

// const url = `${import.meta.env.VITE_APP_SERVER_URL}`;
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const fetchBreakfastPosts = () => axios.get(`${url}/breakfast`);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
