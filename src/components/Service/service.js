import React, { useState, useEffect } from "react";
import "./service.css";

const Service = ({
  item,
  addServiceToSelected = null,
  removeServiceFromSelected = null,
  chosenYear,
  selectedServices,
  clearPrices,
}) => {
  const [checked, setChecked] = useState(false);
  const { id, name, required_services } = item;

  const areRequiredServicesSelected = () => {
    const len = required_services.length;
    for (let i = 0; i < len; i++) {
      if (!selectedServices.includes(required_services[i])) {
        return false;
      }
    }
    return true;
  };

  const isDisabled = required_services ? !areRequiredServicesSelected() : false;

  useEffect(() => {
    setChecked(false);
    if (isDisabled) removeServiceFromSelected(id);
  }, [chosenYear, isDisabled]);

  const handleChange = () => {
    clearPrices();
    if (checked) removeServiceFromSelected && removeServiceFromSelected(id);
    else addServiceToSelected && addServiceToSelected(id);

    setChecked(!checked);
  };

  return (
    <label className="service">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={isDisabled}
      />
      {name}
    </label>
  );
};

export default Service;
