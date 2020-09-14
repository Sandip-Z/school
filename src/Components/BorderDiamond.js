import React from "react";

const BorderDiamond = ({ heading }) => {
  return (
    <div className="border-diamond">
      <h3>{heading || "About us"}</h3>
      <p className="border-diamond__diamond">&#x25C8;</p>
    </div>
  );
};

export default BorderDiamond;
