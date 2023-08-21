import React from "react";
import useCalculator from "../../hooks/useCalculator";
import Banner from "../Banner/banner";
import UISelect from "../UI/UISelect/UISelect";
import ServicesList from "../ServicesList/servicesList";
import UIButton from "../UI/UIButton/UIButton";
import Price from "../Price/price";
import "./calculator.css";

const Calculator = ({ data }) => {
  const {
    years,
    chosenYear,
    services,
    basePrice,
    bestPrice,
    selectedServices,
    clearPrices,
    handleClick,
    handleSelectChange,
    addServiceToSelected,
    removeServiceFromSelected,
  } = useCalculator(data);

  return (
    <>
      <Banner title="Kalkulator usług" />
      <div className="calculator">
        <UISelect
          options={years}
          onChange={handleSelectChange}
          defaultValue={chosenYear}
        />
        {!!services && (
          <>
            <p className="calculator__title">Dostępne usługi</p>
            <ServicesList
              services={services}
              addServiceToSelected={addServiceToSelected}
              removeServiceFromSelected={removeServiceFromSelected}
              chosenYear={chosenYear}
              selectedServices={selectedServices}
              clearPrices={clearPrices}
            />
          </>
        )}
      </div>
      <div className="calculator__summary">
        <UIButton text="Oblicz" handleAction={handleClick} />
        <div className="calculator__prices">
          {!!basePrice && <Price price={basePrice} text="Cena regularna" />}
          {!!bestPrice && <Price price={bestPrice} text="Cena promocyjna" />}
        </div>
      </div>
    </>
  );
};

export default Calculator;
