// import React from 'react'

const Card = (props) => {
  const { title, body, footer } = props;

  return (
    <div>
      <h1>{title}</h1>
      <span>{body}</span>
      <p>{footer}</p>
    </div>
  );
};

export default Card;
