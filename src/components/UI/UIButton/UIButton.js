import React from "react";
import "./UIButton.css";

const UIButton = ({ text = "Kliknij", handleAction }) => (
  <button className="ui__button" onClick={handleAction}>
    {text}
  </button>
);

export default UIButton;
