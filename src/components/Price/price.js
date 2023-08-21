import React from "react";
import "./price.css";

const Price = ({ text = 'Cena', price = 0 }) => {
  return (
    <div className="price">
      <p>{text}</p>
      <strong>{price} zł</strong>
    </div>
  );
};
export default Price;
