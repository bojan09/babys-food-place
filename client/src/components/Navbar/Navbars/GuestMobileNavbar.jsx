import React from "react";
import { Link } from "react-router-dom";

const GuestMobileNavbar = ({ toggle, setToggle }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Log in */}
      <Link to="/login" onClick={() => setToggle(!toggle)}>
        <button className="mt-3  text-color_orange border-b-2">LOG IN</button>
      </Link>

      <p className="text-color_darkgray font-bold p-1">or</p>

      {/* Create Account */}
      <Link to="/create-account" onClick={() => setToggle(!toggle)}>
        <button className="text-color_green font-bold border-b-2">
          CREATE ACCOUNT
        </button>
      </Link>
    </div>
  );
};

export default GuestMobileNavbar;
