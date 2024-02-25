import useCustomUUID from "./customHooks/useCustomUUID";
import useLocalStorage from "./customHooks/useLocalStorage";
import Counter from "./useCallback/COunter";
import UseMemoProductList from "./useMemo/useMemoProductList";
import BasicoReduce from "./useReducer/BasicoReduce";
import FormUseReducer from "./useReducer/FormUseReducer";

function App() {
  const [UUID, setUUID] = useCustomUUID();
  const [datosLS, setLS] = useLocalStorage("keyPepe", "I love mi casa");

  const handleChange = (e) => {
    setLS(e.target.value);
  };

  return (
    <>
      <h1 className="text-4xl">Hook y useVarios</h1>
      <h2 className="text-2xl">UseMemo</h2>
      <hr />
      <UseMemoProductList></UseMemoProductList>
      <hr />
      <h2 className="text-2xl">UseCallback</h2>
      <Counter></Counter>
      <hr />
      <h2 className="text-2xl">UseReduce</h2>
      <BasicoReduce></BasicoReduce>
      <hr />
      <h2 className="text-2xl">Custom Hook Generar UUID</h2>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">UUID Generado : {UUID}</h2>
        <div>
          <button
            onClick={() => setUUID()}
            className="bg-blue-500 text-white rounded px-4 py-2 "
          >
            Generar nuevo UUID
          </button>
        </div>
      </div>
      <hr />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl">Almacenar en el LocalStorage</h2>
        <input
          onChange={handleChange}
          type="text"
          value={datosLS}
          placeholder="Introducir el valor"
          className="w-full px-4 py-2 border border-gray-500 rounded-md"
        />
      </div>
      <hr />
      <FormUseReducer></FormUseReducer>
    </>
  );
}

export default App;
