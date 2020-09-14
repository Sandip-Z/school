import React from "react";
import BorderDiamond from "../BorderDiamond";
const Parallax = ({ background, text, buttonText, heading }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center parallax p-5"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(129, 253, 253, 0.67), rgba(118, 131, 136, 0.72)),url('${background}')`,
      }}
    >
      <div>
        <BorderDiamond heading={heading} />
        <h5>{text}</h5>
        <button className="About-us-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Parallax;
