// import React from 'react'

const Card = ({ imgPokemon, name, stats }) => {
  return (
    <div className="flex flex-col justify-between items-center border border-blue-200 p-6 rounded-xl bg-blue-300 text-black font-bold font-bold">
      <div className="max-h-[150px] mb-5">
        <img className="max-h-[150px]" src={imgPokemon} alt="" />
      </div>
      <h2>{name}</h2>
      <p>
        Avg. Stats: <strong>{Math.floor(stats)}</strong>
      </p>
    </div>
  );
};

export default Card;
