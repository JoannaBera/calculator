import { useEffect, useState } from "react";

const useCalculator = (data) => {
  const [chosenYear, setChosenYear] = useState(data?.years[0].year || null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [basePrice, setBasePrice] = useState(0);
  const [bestPrice, setBestPrice] = useState(0);

  useEffect(() => {
    setSelectedServices([]);
    clearPrices();
  }, [chosenYear]);

  const years = data?.years;
  const chosenYearData = years?.find((year) => year.year === +chosenYear);

  if (!chosenYearData) return null;

  const clearPrices = () => {
    setBasePrice(0);
    setBestPrice(0);
  };

  const { servicePrices, packages } = chosenYearData;

  const handleSelectChange = (value) => {
    setChosenYear(value);
  };

  const services = servicePrices.map((item) =>
    data?.services.find((s) => s.id === item.serviceId)
  );

  const addServiceToSelected = (id) => {
    setSelectedServices([...selectedServices, id]);
  };

  const removeServiceFromSelected = (id) => {
    setSelectedServices(selectedServices.filter((item) => item !== id));
  };

  const getBasePrice = () => {
    let basePrice = 0;
    selectedServices.forEach((id) => {
      const service = servicePrices?.find((sp) => sp.serviceId === id);
      basePrice += service ? service.base_price : 0;
    });
    setBasePrice(basePrice);
  };

  const canPackageBeUsed = (bundle) => {
    const len = bundle.length;
    for (let i = 0; i < len; i++) {
      if (!selectedServices.includes(bundle[i])) {
        return false;
      }
    }
    return true;
  };

  const getBestPrice = () => {
    let bestPrice = null;
    packages.forEach((item) => {
      const { bundle, price } = item;

      if (canPackageBeUsed(bundle)) {
        let finalPrice = price;

        selectedServices.forEach((selectedService) => {
          if (bundle.includes(selectedService)) return;
          const serviceNotIncludedInBundle = servicePrices.find(
            (item) => item.serviceId === selectedService
          );
          finalPrice += serviceNotIncludedInBundle?.base_price;
        });

        if (bestPrice === null || bestPrice > finalPrice)
          bestPrice = finalPrice;
      }

      setBestPrice(bestPrice);
    });
  };

  const handleClick = () => {
    getBasePrice();
    getBestPrice();
  };

  return {
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
  };
};

export default useCalculator;
