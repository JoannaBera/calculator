import React, { useState } from "react";
import "./UISelect.css";

const UISelect = ({ options, onChange, defaultValue = "" }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  if (!options?.length) return null;

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setSelectedValue(currentValue);

    if (onChange) onChange(currentValue);
  };

  const fields = options.map((option) => (
    <option key={option.year} value={option.year}>
      {option.year}
    </option>
  ));

  return (
    <select
      className="ui__select"
      value={selectedValue}
      onChange={handleChange}
    >
      {fields}
    </select>
  );
};

export default UISelect;
