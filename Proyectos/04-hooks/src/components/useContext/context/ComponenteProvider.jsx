import React from "react";
import ComponenteContext from "./ComponenteContext";
import { useState } from "react";

const ComponenteProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    contador: 0,
  });

  return (
    <ComponenteContext.Provider value={{ appState, setAppState }}>
      {children}
    </ComponenteContext.Provider>
  );
};

export default ComponenteProvider;
