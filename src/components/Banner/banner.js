import React from "react";
import "./banner.css";

const Banner = ({ title = "Welcome" }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

export default Banner;
