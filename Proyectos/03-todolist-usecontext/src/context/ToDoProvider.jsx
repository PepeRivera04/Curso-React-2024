import { useState } from "react";
import ToDoContext from "./ToDoContext";

const initialState = [
  {
    id: 1,
    texto: "Aprender React",
    completed: false,
  },
  {
    id: 2,
    texto: "Aprender PHP",
    completed: false,
  },
];

const ToDoProvider = ({ children }) => {
  const [tareas, setTareas] = useState(initialState);

  function agregarTarea() {
    const newTarea = "";
    setTareas([...tareas], newTarea);
  }

  function eliminarTarea(id) {
    return setTareas(tareas.filter((el) => el.id !== id));
  }

  function completarId(id) {}

  // De una tarea quiero : a) Crear una tarea , b) Eliminar una tarea, c) Completar una tarea, d) Contar tareas
  return (
    <ToDoContext.Provider value={(tareas, setTareas)}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
