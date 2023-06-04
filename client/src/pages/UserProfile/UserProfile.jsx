import React, { useState } from "react";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// fileBase for img upload
import FileBase from "react-file-base64";

// assets
import { avatar_img } from "../../assets";

// <react-router-dom></react-router-dom>
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// components
import { FormInput } from "../../components";

const UserProfile = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "John",
      errorMessage:
        "First name should be at least 3-16 characters and it souldn't include any special characters",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Smith",
      errorMessage:
        "Last name should be at least 3-16 characters and it souldn't include any special characters",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "john@smith.com",
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday here ...",
      errorMessage: "Birthday is required",
      label: "Birthday",
      required: true,
    },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "********",
      errorMessage:
        "Password should be at least 8-20 characters and it should include at least 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ];

  const [postData, setPostData] = useState({
    recipeImage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData, navigate));
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* My Profile Heading - Container */}
      <h1 className="textMainHead md:after:w-[63vw] xs:after:w-[42vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
        My Profile
      </h1>

      {/* Container */}
      <div className="md:flex xs:gap-[5rem] md:gap-[12rem] md:mr-[10rem] md:mt-7 md:mb-[6.5%]">
        {/* Avatar & Upload Button - Container */}
        <div className="xs:text-center">
          <img
            src={postData.recipeImage ? postData.recipeImage : avatar_img}
            alt={postData.recipeImage}
            className="w-[200px] h-[200px] mx-auto rounded-full my-3"
          />

          <div className="input-file">
            <FileBase
              placeholder="Upload file"
              type="file"
              multiple={false}
              required
              onDone={({ base64 }) =>
                setPostData({ ...postData, recipeImage: base64 })
              }
            />
          </div>
        </div>

        {/* Form - Container */}
        <form
          onSubmit={handleSubmit}
          className="grid mx-auto xs:text-center xs:mt-5"
        >
          <div className="grid md:grid-cols-2 md:grid-row-3 md:gap-2">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={onChange}
              />
            ))}
          </div>

          <button
            type="submit"
            className="md:ml-2 md:mt-[2.45rem] xs:w-[310px] md:w-[210px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] my-4 mx-auto"
          >
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
