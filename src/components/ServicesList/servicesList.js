import React from "react";
import Service from "../Service/service";
import "./servicesList.css";

const ServicesList = ({
  services,
  addServiceToSelected,
  removeServiceFromSelected,
  chosenYear,
  selectedServices,
  clearPrices,
}) => {
  if (!services.length) return null;

  const items = services.map((item) => {
    return (
      <Service
        item={item}
        key={item.name}
        addServiceToSelected={addServiceToSelected}
        removeServiceFromSelected={removeServiceFromSelected}
        chosenYear={chosenYear}
        selectedServices={selectedServices}
        clearPrices={clearPrices}
      />
    );
  });

  return <div className="services">{items}</div>;
};

export default ServicesList;
