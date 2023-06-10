import {
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  FETCH_POSTS_PER_PAGINATION,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  END_LOADING,
  START_LOADING,
} from "../constants";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case END_LOADING:
      return { ...state, isLoading: false };

    // Fetch all the recipes
    case FETCH_ALL:
      return { ...state, posts: action.payload };

    // Fetch recipe by ID
    case FETCH_POST:
      return { ...state, post: action.payload };

    // Pagination
    case FETCH_POSTS_PER_PAGINATION:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    // Search for Recipes
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };

    // Create a Recipe
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };

    // Update & Like a Recipe
    case UPDATE:
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    // Delete a Recipe
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    default:
      return { ...state, posts: state };
  }
};
