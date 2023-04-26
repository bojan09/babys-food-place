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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast" element={<BreakfastRecipes />} />
          <Route path="/brunch" element={<BrunchRecipes />} />
          <Route path="/lunch" element={<LunchRecipes />} />
          <Route path="/dinner" element={<DinnerRecipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/create-recipes" element={<CreateRecipes />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/update-recipe/:id" element={<UpdateRecipes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
