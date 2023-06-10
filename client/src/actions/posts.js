// import everything from actions as api
import * as api from "../api";

// actions
import {
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  FETCH_POSTS_PER_PAGINATION,
  CREATE,
  UPDATE,
  DELETE,
  START_LOADING,
  END_LOADING,
} from "../constants";

// Get all the recipe posts
export const getPosts = () => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });

    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// Get a single recipe post page
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
    console.log(data);
    console.log("Actions");
  } catch (error) {
    console.log(error);
  }
};

// Pagination
export const getPostsByPage = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostsByPage(page);

    dispatch({
      type: FETCH_POSTS_PER_PAGINATION,
      payload: data,
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// Search Recipes
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: START_LOADING });
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// Create a new recipe
export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update a recipe
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Like the recipe
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Delete the recipe
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
