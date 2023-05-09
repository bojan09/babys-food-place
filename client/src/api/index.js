import axios from "axios";

// const url = `${import.meta.env.VITE_APP_SERVER_URL}`;
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
