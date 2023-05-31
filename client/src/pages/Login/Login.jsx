import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// Decode jwt code
import jwt_decode from "jwt-decode";

// google create/sign in user
import { createOrGetUser } from "../../utilities/googleOAuth";

// google login button
import { GoogleLogin, googleLogout } from "@react-oauth/google";

// RoutePath, authPages
import { userProfile, createAccount, login, AUTH } from "../../constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  useEffect(() => {
    const userLoggedIn = user?.result;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  // Google login functions
  const googleSuccess = async (res) => {
    const result = jwt_decode(res?.credential);
    const token = res?.clientId;

    console.log(token);

    const { name, picture, sub } = result;
    const user = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    try {
      dispatch({ type: AUTH, data: { user } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {
    console.log(error);
  };

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
        <form
          onSubmit={handleSubmit}
          className="text-center grid justify-center md:w-[50%]"
        >
          {/* Email - Container */}

          <label className="robotoSlab font-bold text-color_orange">
            Email
          </label>
          <input
            type="email"
            placeholder="john@smith.com"
            required
            onClick={handleChange}
            className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
          />

          {/* Password - Container */}
          <div className="xs:mt-5 md:m-0 grid">
            <label className="robotoSlab font-bold text-color_orange">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              required
              onClick={(handleChange, handleShowPassword)}
              className="xs:w-[300px] md:w-[300px] md:h-[50px] mx-auto"
            />
          </div>

          {/* Login Button - Container */}
          <Link to={userProfile} className="md:ml-1 md:text-start">
            <button className="xs:mt-10 md:mt-5  xs:w-[310px] md:w-full h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] ">
              log in
            </button>
          </Link>

          <button
            className="robotoSlab text-color_orange font-bold text-center"
            onClick={switchMode}
          >
            {isSignUp ? (
              <div className="mt-3">
                <Link to={login}>Already have an account? Sign in</Link>
              </div>
            ) : (
              <div className="mt-3 ">
                <Link to={createAccount}>
                  Don't have an account? Create Account
                </Link>
              </div>
            )}
          </button>
          {/* Google Login Button - Container */}
          <div>
            {user ? (
              <div className="bg-color_lightgray p-3 rounded-full mt-4">
                <h2 className="robotoSlab text-lg">You are logged in</h2>
              </div>
            ) : (
              <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
