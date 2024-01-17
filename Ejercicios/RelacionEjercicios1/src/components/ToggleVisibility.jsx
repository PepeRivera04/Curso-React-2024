// import React from 'react'

import { useState } from "react";

const ToggleVisibility = () => {
  const [visibility, setVisibility] = useState(true);

  function changeVisibility() {
    setVisibility(!visibility);
  }

  return (
    <div>
      <button onClick={changeVisibility}>Button</button>
      {visibility && <p>Este es el texto que se oculta</p>}
    </div>
  );
};

export default ToggleVisibility;
