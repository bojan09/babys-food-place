import React, { useEffect, useState } from "react";

// react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App = () => {
  const i = 9000;
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={mainPath} element={<Home />} />
          <Route path={recipeId} element={<RecipePage />} />
          <Route path={createRecipe} element={<CreateRecipes />} />
          <Route
            path={myRecipes}
            element={<MyRecipes key={i} setCurrentId={setCurrentId} />}
          />
          <Route
            path={updateRecipe}
            element={
              <RecipesForm
                key={i}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
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
    </div>
  );
};

export default App;
