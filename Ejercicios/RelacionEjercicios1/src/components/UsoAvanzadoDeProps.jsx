/* eslint-disable react/prop-types */
const UsoAvanzadoDeProps = (props) => {
  const { text, backgroundColor, color, onClick } = props;

  const style = {
    backgroundColor,
    color,
    borderRadius: "15px",
  };

  return (
    <>
      <button style={style} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default UsoAvanzadoDeProps;
