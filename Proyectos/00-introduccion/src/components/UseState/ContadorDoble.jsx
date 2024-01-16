import { useState } from "react";

const initialState = {
  pepe: 0,
  ana: 0,
};

function ContadorDoble() {
  const [friends, setFriends] = useState(initialState);

  function handlerClickIncrementAna() {
    setFriends((prevFriends) => ({
      ...prevFriends,
      ana: prevFriends.ana + 1,
    }));
  }

  function handlerClickIncrementPepe() {
    setFriends({ ...friends, pepe: friends.pepe + 1 });
  }

  return (
    <>
      <div>
        <span>
          Pepe tiene : <strong>{friends.pepe}</strong>
        </span>
        <button onClick={handlerClickIncrementPepe}>Incrementar Amigo</button>
      </div>

      <div>
        <span>
          Ana tiene : <strong>{friends.ana}</strong>
        </span>
        <button onClick={handlerClickIncrementAna}>Incrementar Amigo</button>
      </div>
    </>
  );
}

export default ContadorDoble;
