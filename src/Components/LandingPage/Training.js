import React from "react";
import BorderDiamond from "../BorderDiamond";
import ncitGroup from "../../Asset/ncitGroup.jpg";
import mic from "../../Asset/mic.png";
import nosk from "../../Asset/nosk.png";
import redhat from "../../Asset/redhat.png";
import cisco from "../../Asset/cisco.png";

const Training = () => {
  return (
    <div className="training font-weight-bold text-uppercase m-5">
      <BorderDiamond heading="Training Partner/Clubs" />
      <div className="d-flex justify-content-between">
        <div className="training__image">
          <img
            src={mic}
            alt="Microsoft Innovation Center"
            className="training__image--image"
          />
        </div>
        <div className="training__image">
          <img src={cisco} alt="Cisco" className="training__image--image" />
        </div>
        <div className="training__image">
          <img src={redhat} alt="Red Hat" className="training__image--image" />
        </div>
        <div className="training__image">
          <img
            src={nosk}
            alt="Nepal Open Source Klub"
            className="training__image--image"
          />
        </div>
        <div className="training__image">
          <img
            src={ncitGroup}
            alt="NCIT Group"
            className="training__image--image"
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
