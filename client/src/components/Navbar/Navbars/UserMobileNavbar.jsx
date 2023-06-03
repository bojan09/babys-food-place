import React, { useState, useEffect } from "react";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// jwt
import decode from "jwt-decode";

// redux
import { useDispatch } from "react-redux";

// RoutePath
import { logout, myRecipes, userProfile, LOGOUT } from "../../../constants";

const UserMobileNavbar = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const googleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  const localLogout = () => {
    dispatch({ type: LOGOUT });

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) localLogout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="uppercase">
      <ul className=" xs:inline-block md:flex items-center gap-4">
        <li className="mb-2 mt-4">
          <Link
            onClick={() => setToggle(!toggle) || window.scrollTo(0, 0)}
            to={myRecipes}
            className="border-bottom pb-0.4 font-bold text-color_green"
          >
            my recipes
          </Link>
        </li>

        <li className="mb-2">
          <Link
            onClick={() => setToggle(!toggle)}
            to={userProfile}
            className="border-bottom pb-0.4 font-bold text-color_orange"
          >
            my profile
          </Link>
        </li>

        <li className="mb-2">
          <Link
            to={logout}
            onClick={((googleLogout, localLogout), () => setToggle(!toggle))}
            className="border-bottom md:pb-0.4 font-bold text-color_midgray"
          >
            log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMobileNavbar;
