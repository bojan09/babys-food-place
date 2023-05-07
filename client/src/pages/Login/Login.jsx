import React from "react";

import { Link } from "react-router-dom";

// RoutePath
import { userProfile } from "../../constants";

const Login = () => {
  return (
    <div>
      {/* Login Heading - Container */}
      <div className="xs:mt-[-2rem] md:m-0">
        <h1 className="textMainHead md:after:w-[67vw] xs:after:w-[62vw] xs:text-[28px] sm:text-[36px] sm:mt-[4rem] xs:mt-[4rem] text-center">
          Log in
        </h1>
      </div>

      {/*  Container */}
      <div className="md:flex mx-auto md:w-[70%] md:mt-[3rem] mb-[10%]">
        {/* Secondary Heading & Paragraph - Container */}
        <div className="xs:mx-4 xs:my-4 md:m-0 robotoSlab md:w-[50%]">
          <h1 className="md:text-[46px] xs:text-[36px]  font-bold my-4 text-color_darkgray">
            <span className="text-color_orange">Welcome to</span> Baby's
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

        {/* Email & Password - Container */}
        <div className="text-center grid justify-center md:w-[50%]">
          {/* Email - Container */}

          <label className="robotoSlab font-bold text-color_orange">
            Email
          </label>
          <input
            type="email"
            placeholder="john@smith.com"
            className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
          />

          {/* Password - Container */}
          <div className="xs:mt-5 md:m-0 grid">
            <label className="robotoSlab font-bold text-color_orange">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
            />
          </div>

          {/* Login Button - Container */}
          <Link to={userProfile} className="md:ml-3 md:text-start">
            <button className="xs:mt-10 md:mt-5  xs:w-[310px] md:w-[210px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] ">
              log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
