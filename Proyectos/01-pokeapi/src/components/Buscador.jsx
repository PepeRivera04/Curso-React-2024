// import React from 'react'

const Buscador = ({ onChange, onKeyDown, busqueda }) => {
  return (
    <div className="flex justify-center mt-4 mb-4 p-6 ">
      <input
        className="rounded-md p-1"
        type="text"
        placeholder="Nombre del pokemón"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={busqueda}
      />
      <button
        className="bg-blue-200 text-black p-1 rounded-md mx-4"
        type="submit"
      >
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
