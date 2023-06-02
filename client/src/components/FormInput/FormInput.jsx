import React, { useState } from "react";

const FormInput = ({ label, errorMessage, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="text-center grid justify-center md:w-[50%] robotoSlab mt-[1.7rem] md:ml-[4rem]">
      <label>{label}</label>

      <input
        className="w-[300px] md:h-[50px] mx-auto"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="robotoSlab font-medium text-[14px] rounded-[5px] p-2 bg-red-200 text-red-500 hidden w-[300px]">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
