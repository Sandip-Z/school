import React from "react";
import { Carousel } from "antd";
import one from "../../Asset/1.jpg";
import two from "../../Asset/2.jpg";
import three from "../../Asset/3.jpg";
import four from "../../Asset/4.jpg";
import five from "../../Asset/5.jpg";
import six from "../../Asset/6.jpg";
import seven from "../../Asset/7.jpg";

const CustomCarousel = () => {
  const contentStyle = {
    width: "100%",
  };
  return (
    <Carousel effect="fade" autoplay>
      <div>
        <img src={one} style={{ ...contentStyle }} />
      </div>
      <div>
        <img src={two} style={{ ...contentStyle }} />
      </div>
      <div>
        <img src={three} style={{ ...contentStyle }} />
      </div>
      <div>
        <img src={four} style={{ ...contentStyle }} />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
