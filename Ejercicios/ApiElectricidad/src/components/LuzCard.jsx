import React from "react";

const LuzCard = ({ value, date, estilo }) => {
  return (
    <div
      className={`border-collapse border rounded-md p-6 ${estilo} flex flex-col justify-center items-center text-2xl `}
    >
      <h1>{value} €/MWh</h1>
      <h2>{date.substring(11, 19)}</h2>
    </div>
  );
};

export default LuzCard;
