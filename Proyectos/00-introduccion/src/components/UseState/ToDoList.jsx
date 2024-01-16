import { useState } from "react";
import { idGenerator } from "../../helpers/idGenerator";

const initialState = [
  {
    id: 1,
    title: "Comprar pan",
    completed: false,
  },
  {
    id: 2,
    title: "Pasear al perro",
    completed: true,
  },
  {
    id: 3,
    title: "Aprender React",
    completed: false,
  },
];

const ToDoList = () => {
  // Hooks
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");

  // Funciones
  function handlerRemoveTask(taskId) {
    const newArrayFiltered = tasks.filter((tarea) => tarea.id !== taskId);
    setTasks(newArrayFiltered);
  }

  function handlerToggleCompleted(taskId) {
    const updatedTask = tasks.map((tarea) =>
      tarea.id === taskId ? { ...tarea, completed: !tarea.completed } : tarea
    );
    setTasks(updatedTask);
  }

  function handlerAddTask() {
    if (newTask.trim() !== "") {
      const newId = idGenerator();
      const newTaskObject = {
        id: newId,
        title: newTask.trim(),
        completed: false,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-yellow-50 shadow-md rounded-md">
      <h1 className="text-2xl mb-4 font-bold text-uppercase text-center">
        To Do List
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nueva Tarea"
          className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          //   onKeyDown={}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          onClick={handlerAddTask}
        >
          Añadir
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((tarea) => (
            <li key={tarea.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={tarea.completed}
                onChange={() => handlerToggleCompleted(tarea.id)}
              />
              <span className={tarea.completed ? "line-through" : ""}>
                {tarea.title}
              </span>
              <button
                className="ml-auto bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-800"
                onClick={() => handlerRemoveTask(tarea.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
