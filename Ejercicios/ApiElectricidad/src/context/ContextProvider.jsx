import React, { useEffect, useState } from "react";

import Context from "./Context";

const initialDate = new Date();
const initialDateISOS = initialDate.toISOString();
initialDate.setHours(initialDate.getHours() + 24);
const finalDateISOS = initialDate.toISOString();

const URL = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${initialDateISOS}&end_date=${finalDateISOS}&time_trunc=hour`;
const URL2 = "https://jsonplaceholder.org/users";

const ContextProvider = ({ children }) => {
  const [preciosLuz, setPreciosLuz] = useState([]);
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(URL);
      const data = await res.json();

      const values = data.included.find(
        (item) => item.type === "Precio mercado spot (€/MWh)"
      ).attributes.values;
      setPreciosLuz(values);
    }
    fetchApi();
  }, []);

  useEffect(() => {
    async function fetchApiUser() {
      const res = await fetch(URL2);
      const data = await res.json();

      setAllUsers(data);
    }
    fetchApiUser();
  }, []);

  return (
    <Context.Provider
      value={{
        preciosLuz,
        setPreciosLuz,
        user,
        setUser,
        allUsers,
        setAllUsers,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
