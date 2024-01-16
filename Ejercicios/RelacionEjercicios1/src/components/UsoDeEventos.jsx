const UsoDeEventos = () => {
  function handlerClick() {
    // e.preventDefault();
    console.log("Has pulsado el botón");
  }

  return (
    <>
      <button type="submit" onClick={handlerClick}>
        Clicar
      </button>
    </>
  );
};

export default UsoDeEventos;
