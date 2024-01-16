import { useState } from "react";

const initialState = {
  pepe: 0,
  ana: 0,
};

function ContadorDobleBest() {
  const [friends, setFriends] = useState(initialState);

  function handlerClickIncrement(friendName) {
    setFriends({
      ...friends,
      [friendName]: friends[friendName] + 1,
    });
  }

  return (
    <>
      <div>
        <span>
          Pepe tiene : <strong>{friends.pepe}</strong>
        </span>
        <button onClick={() => handlerClickIncrement("pepe")}>
          Incrementar Amigo
        </button>
      </div>

      <div>
        <span>
          Ana tiene : <strong>{friends.ana}</strong>
        </span>
        <button onClick={() => handlerClickIncrement("ana")}>
          Incrementar Amigo
        </button>
      </div>
    </>
  );
}

export default ContadorDobleBest;
