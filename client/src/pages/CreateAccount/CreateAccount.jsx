import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// components
import { FormInput } from "../../components";

// actions
import { signup } from "../../actions/auth.js";

const CreateAccount = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData, navigate));
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Create Account Heading - Container */}
      <h1 className="textMainHead md:after:w-[59.5vw] xs:after:w-[35vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
        Create Account
      </h1>

      {/*  Container */}
      <div className="md:flex mx-auto gap-[6rem]  md:ml-[17rem] md:w-[70%] md:mt-[3rem] mb-[10%]">
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
          className="grid mx-auto xs:text-center xs:mt-5  md:w-[50%]"
        >
          <div className="grid md:grid-cols-2 md:grid-row-3 md:gap-4">
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

export default CreateAccount;
