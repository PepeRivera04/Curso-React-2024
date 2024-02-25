import { useReducer } from "react";

const initialState = { edad: 10 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { edad: state.edad + 1 };
    case "DECREMENT":
      return { edad: state.edad - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const BasicoReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mx-auto text-center">
      <div className="text-2xl font-bold mb-4">Basico de useReducer</div>
      <div className="text-xl mb-4">Tu edad es : {state.edad}</div>

      <div className="flex justify-center">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Incrementar edad
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrementar edad
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Resetear edad
        </button>
      </div>
    </div>
  );
};

export default BasicoReduce;
