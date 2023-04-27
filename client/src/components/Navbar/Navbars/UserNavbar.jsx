import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div className="uppercase">
      <ul className="flex items-center gap-4">
        <li>
          <Link
            to="/my-recipes"
            className="border-bottom pb-0.2 font-bold text-color_green"
          >
            my recipes
          </Link>
        </li>
        <span className="black_dot md:hidden lg:inline-block"></span>
        <li>
          <Link
            to="/user-profile"
            className="border-bottom pb-0.2 font-bold text-color_orange"
          >
            my profile
          </Link>
        </li>
        <span className="black_dot md:hidden lg:inline-block"></span>
        <li>
          <Link
            to="/logout"
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
