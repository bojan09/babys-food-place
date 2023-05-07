import React, { useState, useEffect, useRef } from "react";

const RecipeComments = () => {
  // states
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div>
      {/* Comments - Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 md:w-[82vw] xs:mx-4 md:mx-0">
        {/* Comments Heading */}
        <h3 className="md:text-[28px] xs:text-[24px] mb-8 font-bold robotoSlab text-color_orange border-b pb-4">
          Comment
        </h3>

        {/* Container */}
        <div className="ml-[-1rem]">
          {/* Comment */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea
              className="py-3 outline-none w-full h-[10rem] rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-color_midgray robotoSlab"
              placeholder="Comment"
              name="Comment"
            />
          </div>
          {/* Name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
            <input
              type="text"
              className="py-3 px-4 outline-none w-full h-[50px] rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-color_midgray robotoSlab"
              placeholder="Name"
              name="Name"
            />

            {/* Email */}
            <input
              type="email"
              className="py-3 outline-none w-full h-[50px]  px-4 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-color_midgray robotoSlab"
              placeholder="Email"
              name="Email"
            />
          </div>

          {/* Save Email - for future comments */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="storeData"
                name="storeData"
                value="true"
                className="w-[20px]"
              />
              <label
                className="text-gray-500 ml-2 cursor-pointer robotoSlab xs:text-[16px] md:text-[18px]"
                htmlFor="storeData"
              >
                Save my e-mail and name for the next time I comment
              </label>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sx text-red-500">All fields are required.</p>
        )}
        <div className="mt-8 xs:flex justify-center md:inline-block">
          <button
            type="button"
            className="transition duration-500 ease hover:bg-green-700 xs:mt-10 md:mt-5 xs:w-[175px] md:w-[210px] md:ml-3 h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px]"
          >
            Comment
          </button>
          {showSuccessMessage && (
            <span className="text-xl float-right font-semibold mt-3 text-indigo-900 bg-green-300 opacity-70 p-2 rounded-md">
              Comment submitted for review
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeComments;
