//Global
import { useState } from "react";

//Icons
import show from "../../assets/show.png";

//Styles
import "./input.css";

const Input = ({ type, className, placeholder, width, height, iconWidth }) => {
  const [inputType, setInputType] = useState("password");

  const changeInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  if (type === "password") {
    return (
      <div style={{ width, height }} className="block-input">
        <input
          required
          placeholder={placeholder}
          className={className}
          type={inputType}
        />
        <img
          style={{ width: iconWidth }}
          onClick={changeInputType}
          src={show}
          alt="show"
        />
      </div>
    );
  }

  return (
    <div style={{ width, height }} className="block-input">
      <input
        required
        placeholder={placeholder}
        className={className}
        type={type}
      />
    </div>
  );
};

export default Input;
