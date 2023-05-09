import React from "react";
import { Link } from "react-router-dom";

// RoutePath
import { login, createAccount } from "../../../constants";

const GuestNavbar = () => {
  return (
    <div className="flex gap-2 items-center font-medium">
      {/* Log in */}
      <Link to={login} onClick={window.scrollTo(0, 0)}>
        <button className="w-[107px] h-[44px] p-2 line-border rounded-lg text-color_midgray font-bold">
          LOG IN
        </button>
      </Link>
      <p className="text-color_orange font-bold mx-2">or</p>
      {/* Create Account */}
      onClick={window.scrollTo(0, 0)}
      <Link to={createAccount}>
        <button className="w-[178px] h-[44px] p-2 rounded-lg bg-color_green text-white font-bold">
          CREATE ACCOUNT
        </button>
      </Link>
    </div>
  );
};

export default GuestNavbar;
