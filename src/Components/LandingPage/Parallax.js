import React from "react";

const Parallax = ({ background, text, buttonText, heading }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center parallax p-5"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(129, 253, 253, 0.67), rgba(118, 131, 136, 0.72)),url('${background}')`,
      }}
    >
      <div>
        <h3>{heading || "About us"}</h3>
        <h5>{text}</h5>
        {buttonText}
      </div>
    </div>
  );
};

export default Parallax;
