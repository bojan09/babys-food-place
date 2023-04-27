import React from "react";

const GuestNavbar = () => {
  return (
    <div className="flex gap-2 items-center font-medium">
      <button className="w-[107px] h-[44px] p-2 line-border rounded-lg text-color_darkgray">
        LOG IN
      </button>
      <p className="text-color_orange font-bold mx-2">or</p>
      <button className="w-[178px] h-[44px] p-2 rounded-lg bg-color_green text-white">
        CREATE ACCOUNT
      </button>
    </div>
  );
};

export default GuestNavbar;
