/*--------------*  Meal categories for Navigation Links *--------------*/
export const navLinks = [
  {
    id: "breakfast",
    title: "BREAKFAST",
  },
  {
    id: "brunch",
    title: "BRUNCH",
  },
  {
    id: "lunch",
    title: "LUNCH",
  },
  {
    id: "dinner",
    title: "DINNER",
  },
];

/*--------------*  Route paths *--------------*/
export const mainPath = "/";
// Recipe
export const recipeId = "/recipe/:id";
export const createRecipe = "/create-recipe";
export const updateRecipe = "/update-recipe/:id";
export const myRecipes = "/my-recipes";
// Food category
export const breakfast = "/breakfast";
export const brunch = "/brunch";
export const lunch = "/lunch";
export const dinner = "/dinner";
// Auth
export const login = "/login";
export const logout = "/logout";
// User
export const userProfile = "/user-profile";
export const createAccount = "/create-account";

/*--------------*  Action Types *--------------*/
export const FETCH_ALL = "FETCH_ALL";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const LIKE = "LIKE";
