import React, { useState } from "react";

import { Link } from "react-router-dom";

// Create Account / Login
import { createAccount, login } from "../../constants";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

const CreateAccount = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const handleSubmit = () => {};
  const handleChange = () => {};

  const [isSignUp, setisSignUp] = useState(false);

  {
    /* If user is signed up or not ask  */
  }
  const switchMode = () => {
    setisSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  {
    /* Show password or don't show based on the click of a icon, from the input file  */
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <div>
      {/* Create Account Heading - Container */}
      <h1 className="textMainHead md:after:w-[59.5vw] xs:after:w-[35vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
        Create Account
      </h1>

      {/*  Container */}
      <div className="md:flex mx-auto md:ml-[17rem] md:w-[65%] md:mt-[3rem] mb-[10%]">
        {/* Secondary Heading & Paragraph - Container */}
        <div className="xs:mx-4 xs:my-4 md:m-0 robotoSlab md:w-[50%]">
          <h1 className="md:text-[46px] xs:text-[36px]  font-bold my-4 text-color_darkgray">
            <span className="text-color_orange">Create your</span> <br />{" "}
            Account
          </h1>
          <p className="md:text-[20px] xs:text-[18px] text-color_midgray">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>

        {/* Form - Container */}
        <form
          onSubmit={handleSubmit}
          className="md:flex xs:text-center xs:mt-5 md:ml-[4rem] md:mr-[-2rem]"
        >
          {/* Name & LastName - Container */}
          <div className="grid">
            <label className="robotoSlab font-bold text-color_orange">
              Name
            </label>
            <input
              type="text"
              placeholder="John"
              required
              name="firstName"
              onClick={handleChange}
              className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
            />

            {/* LastName - Container */}
            <div className="xs:mt-5 md:m-0 text-center grid">
              <label className="robotoSlab font-bold text-color_orange">
                LastName
              </label>
              <input
                type="text"
                placeholder="Smith"
                required
                name="lastName"
                onClick={handleChange}
                className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
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
                  required
                  name="password"
                  onClick={handleChange}
                  className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
                />

                <button
                  type="submit"
                  className="md:ml-2 md:mt-[2.45rem] xs:w-[310px] md:w-[210px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4"
                >
                  save
                </button>

                <button
                  className="robotoSlab text-color_orange font-bold text-center"
                  onClick={switchMode}
                >
                  {isSignUp ? (
                    <Link to={login}>Already have an account? Sign in</Link>
                  ) : (
                    <Link to={createAccount}>
                      Don't have an account? Create Account
                    </Link>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Email & Birthdate - Container */}
          <div className="xs:mt-5 md:ml-[1rem] md:m-0 grid">
            <label className="robotoSlab font-bold text-color_orange">
              Email
            </label>
            <input
              type="email"
              placeholder="john@smith.com"
              required
              name="email"
              onClick={handleChange}
              className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
            />

            {/* Birthdate - Container */}
            <div className="xs:mt-5 md:m-0 grid">
              <label className="robotoSlab font-bold text-color_orange">
                Birthdate
              </label>
              <input
                type="date"
                required
                name="birthdate"
                onClick={handleChange}
                className="xs:w-[300px] md:w-[300px] md:h-[50px] md:text-left mx-auto text-color_midgray"
              />
            </div>

            {/* Repeat Password  - Container */}
            {isDesktopOrLaptop && (
              <div className="xs:mt-5 md:m-0 md:grid">
                <label className="robotoSlab font-bold text-color_orange">
                  Repeat Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  name="repeatPassword"
                  onClick={handleChange}
                  className="md:mb-[8.45rem] xs:w-[300px] md:w-[300px] md:h-[50px]"
                />
              </div>
            )}
          </div>

          {/* Password & Repeat Password - Container */}
          {isMobile && (
            <div className="xs:mt-5 md:m-0 grid">
              <label className="robotoSlab font-bold text-color_orange">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                required
                name="password"
                onClick={handleChange}
                className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
              />

              {/* Repeat Password  - Container */}
              <div className="xs:mt-5 md:m-0 md:grid">
                <label className="robotoSlab font-bold text-color_orange">
                  Repeat Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  name="repeatPassword"
                  onClick={handleChange}
                  className="xs:w-[300px] md:w-[300px] md:h-[50px] text-center"
                />
              </div>
            </div>
          )}

          {/* Save  - Button */}
          {isMobile && (
            <button
              type="submit"
              className="xs:mt-10 md:m-0 xs:w-[310px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4"
            >
              save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
