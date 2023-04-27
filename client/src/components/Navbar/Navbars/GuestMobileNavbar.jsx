import React from "react";

const GuestMobileNavbar = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <button className="mt-3  text-color_orange border-b-2">LOG IN</button>
      <p className="text-color_darkgray font-bold p-1">or</p>
      <button className="text-color_green font-bold border-b-2">
        CREATE ACCOUNT
      </button>
    </div>
  );
};

export default GuestMobileNavbar;
