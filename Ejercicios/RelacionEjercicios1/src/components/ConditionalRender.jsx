// import React from "react";

const ConditionalRender = (props) => {
  const { condition } = props;

  return condition ? <p>Condicion verdadera</p> : <p>Condicion falsa</p>;
};

export default ConditionalRender;
