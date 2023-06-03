import React, { useEffect, useState } from "react";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// jwt
import decode from "jwt-decode";

// redux
import { useDispatch } from "react-redux";

// RoutePath
import { logout, myRecipes, userProfile, LOGOUT } from "../../../constants";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const googleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  const localLogout = () => {
    dispatch({ type: LOGOUT });

    setUser(null);
  };

  return (
    <div className="uppercase">
      <ul className="flex items-center gap-4">
        <li>
          <Link
            to={myRecipes}
            onClick={window.scrollTo(0, 0)}
            className="border-bottom pb-0.2 font-bold text-color_green"
          >
            my recipes
          </Link>
        </li>
        <span className="black_dot md:hidden lg:inline-block"></span>
        <li>
          <Link
            to={userProfile}
            onClick={window.scrollTo(0, 0)}
            className="border-bottom pb-0.2 font-bold text-color_orange"
          >
            my profile
          </Link>
        </li>
        <span className="black_dot md:hidden lg:inline-block"></span>
        <li>
          <Link
            to={logout}
            onClick={(googleLogout, localLogout)}
            className="border-bottom pb-0.2 font-bold text-color_midgray"
          >
            log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNavbar;
