import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// Decode jwt code
import jwt_decode from "jwt-decode";

// google login button
import { GoogleLogin } from "@react-oauth/google";

// RoutePath, authPages
import { AUTH } from "../../constants";

// components
import { FormInput } from "../../components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email here",
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your password here",
      errorMessage:
        "Password should be at least 8-20 characters and it should include at least 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const userLoggedIn = user?.result;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  // Google login functions
  const googleSuccess = async (res) => {
    const result = jwt_decode(res?.credential);

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

        <form
          onSubmit={handleSubmit}
          className="text-center grid justify-center md:w-[50%]"
        >
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          ))}

          {/* Login Button - Container */}
          <button
            type="submit"
            className="xs:mt-10 md:mt-5 md:mb-[2rem] md:ml-2 xs:w-[310px] md:w-[300px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px]  "
          >
            log in
          </button>

          {/* Google Login Button - Container */}
          <div className="xs:mx-auto md:ml-12">
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
