// import React from "react";

const Modal = ({ imgPokemon, name, stats, isOpen, closeModal }) => {
  return (
    <div
      id="modal"
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity ease-in-out duration-500 `}
    >
      <div
        className={`flex flex-col justify-between items-center border border-blue-200 p-6 rounded-xl bg-blue-300 text-black font-bold font-bold`}
      >
        <div className="max-h-[150px] mb-5">
          <img className="max-h-[150px]" src={imgPokemon} alt="" />
        </div>
        <h2>{name}</h2>
        <p>
          Avg. Stats: <strong>{Math.floor(stats)}</strong>
        </p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
