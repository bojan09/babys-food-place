import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import {
  Home,
  Login,
  CreateAccount,
  UserProfile,
  CreateRecipes,
  UpdateRecipes,
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
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={mainPath} element={<Home />} />
          <Route path={recipeId} element={<RecipePage />} />
          <Route path={createRecipe} element={<CreateRecipes />} />
          <Route path={myRecipes} element={<MyRecipes />} />
          <Route path={updateRecipe} element={<UpdateRecipes />} />
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
