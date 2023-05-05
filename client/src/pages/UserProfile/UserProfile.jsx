import React from "react";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// assets
import { avatar_img } from "../../assets";

const UserProfile = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="textMainHead md:after:w-[65vw] xs:after:w-[42vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
        My Profile
      </h1>

      {/* Container */}
      <div className="md:flex gap-[5rem] md:mr-[28rem] md:mb-[6.5%]">
        {/* Avatar & Upload Button - Container */}
        <div className="xs:text-center">
          <img
            src={avatar_img}
            alt="avatar_img"
            className="xs:w-[123px] md:w-[180px] mx-auto"
          />
          <button className="line-border text-color_midgray rounded-lg xs:w-[300px] md:w-[270px] h-[45px] uppercase text-[18px] my-6">
            upload image
          </button>
        </div>

        {/* Form - Container */}
        <form className="md:flex xs:text-center xs:mt-5 md:m-0">
          {/* Name & LastName - Container */}
          <div className="md:grid">
            <label className="robotoSlab font-bold text-color_orange">
              Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
            />

            {/* LastName - Container */}
            <div className="xs:mt-5 md:m-0 text-center md:grid">
              <label className="robotoSlab font-bold text-color_orange">
                LastName
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
              />
            </div>

            {/* Password  - Container */}
            {isDesktopOrLaptop && (
              <div className="xs:mt-5 md:m-0 md:grid">
                <label className="robotoSlab font-bold text-color_orange">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
                />
              </div>
            )}
          </div>

          {/* Email & Birthdate - Container */}
          <div className="xs:mt-5 md:ml-[1rem] md:m-0 md:grid">
            <label className="robotoSlab font-bold text-color_orange">
              Email
            </label>
            <input
              type="email"
              placeholder="john@smith.com"
              className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
            />

            {/* Birthdate - Container */}
            <div className="xs:mt-5 md:m-0 md:grid">
              <label className="robotoSlab font-bold text-color_orange">
                Birthdate
              </label>
              <input
                type="date"
                className="xs:w-[300px] md:w-[300px] md:h-[50px] md:text-left xs:text-center text-color_midgray"
              />
            </div>

            {/* Password  - Container */}
            {isDesktopOrLaptop && (
              <div className="xs:mt-5 md:m-0 md:grid">
                <label className="robotoSlab font-bold text-color_orange">
                  Repeat Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
                />
              </div>
            )}
          </div>

          {/* Password & Repeat Password - Container */}
          {isMobile && (
            <div className="xs:mt-5 md:m-0 md:grid">
              <label className="robotoSlab font-bold text-color_orange">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
              />

              {/* Repeat Password  - Container */}
              <div className="xs:mt-5 md:m-0 md:grid">
                <label className="robotoSlab font-bold text-color_orange">
                  Repeat Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
                />
              </div>
            </div>
          )}

          {/* Save  - Button */}
          {isMobile && (
            <button className="xs:mt-10 md:m-0 xs:w-[310px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4">
              save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
