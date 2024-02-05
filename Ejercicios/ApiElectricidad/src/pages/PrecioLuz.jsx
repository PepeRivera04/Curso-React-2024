import React, { useContext } from "react";
import Context from "../context/Context";
import LuzCard from "../components/LuzCard";

const PrecioLuz = () => {
  const { preciosLuz } = useContext(Context);

  const highestPrices = [...preciosLuz]
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  const lowestPrices = [...preciosLuz]
    .sort((a, b) => a.value - b.value)
    .slice(0, 6);

  function colorSelecter(precio) {
    if (highestPrices.includes(precio)) {
      return "bg-red-200";
    } else if (lowestPrices.includes(precio)) {
      return "bg-green-200";
    } else {
      return "bg-orange-200";
    }
  }

  return (
    <div className="gap-[1.2rem] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-16 bg-slate-800 h-[100%]">
      {preciosLuz.map((precio, index) => (
        <LuzCard
          key={index}
          value={precio.value}
          date={precio.datetime}
          estilo={colorSelecter(precio)}
        ></LuzCard>
      ))}
    </div>
  );
};

export default PrecioLuz;
