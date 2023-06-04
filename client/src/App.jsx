import React, { useEffect, useState } from "react";

// react-router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// actions
import { getPosts } from "./actions/posts";

// pages
import {
  Home,
  Login,
  CreateAccount,
  UserProfile,
  CreateRecipes,
  MyRecipes,
  RecipePage,
} from "./pages";

// meal categories
import {
  BreakfastRecipes,
  BrunchRecipes,
  LunchRecipes,
  DinnerRecipes,
} from "./pages/MealCategories";
// UpdateRecipes
import { RecipesForm } from "./components/Recipes";

// components
import { Navbar, Footer } from "./components";

// route paths
import {
  mainPath,
  mainPathWithSearch,
  recipeId,
  createRecipe,
  updateRecipe,
  myRecipes,
  breakfast,
  brunch,
  lunch,
  dinner,
  login,
  logout,
  userProfile,
  createAccount,
} from "./constants";

// google-login
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <GoogleOAuthProvider
      clientId={`${import.meta.env.VITE_APP_GOOGLE_OAUTH_CLIENT_ID}`}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={() => <Navigate to={mainPath} />} />
          <Route path={mainPath} exact element={<Home />} />
          <Route path={mainPathWithSearch} exact element={<Home />} />
          <Route path={recipeId} element={<RecipePage />} />
          <Route path={createRecipe} element={<CreateRecipes />} />
          <Route
            path={myRecipes}
            element={<MyRecipes setCurrentId={setCurrentId} />}
          />
          <Route
            path={updateRecipe}
            element={
              <RecipesForm currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
          <Route path={breakfast} element={<BreakfastRecipes />} />
          <Route path={brunch} element={<BrunchRecipes />} />
          <Route path={lunch} element={<LunchRecipes />} />
          <Route path={dinner} element={<DinnerRecipes />} />
          <Route path={login} element={<Login />} />
          <Route path={logout} element={<Login />} />
          <Route path={userProfile} element={<UserProfile />} />
          <Route path={createAccount} element={<CreateAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
