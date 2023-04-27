import React from "react";
import { Link } from "react-router-dom";

const UserMobileNavbar = () => {
  return (
    <div className="uppercase">
      <ul className="xs:inline-block md:flex items-center gap-4">
        <li className="mb-2 mt-4">
          <Link
            to="/my-recipes"
            className="border-bottom pb-0.4 font-bold text-color_green"
          >
            my recipes
          </Link>
        </li>

        <li className="mb-2">
          <Link
            to="/user-profile"
            className="border-bottom pb-0.4 font-bold text-color_orange"
          >
            my profile
          </Link>
        </li>

        <li className="mb-2">
          <Link
            to="/logout"
            className="border-bottom pb-0.4 font-bold text-color_midgray"
          >
            log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMobileNavbar;
