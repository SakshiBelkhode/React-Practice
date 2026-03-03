import { useState } from "react";
import "./App.css";

function App() {

  // State for input
  const [task, setTask] = useState("");

  // State for task list
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {

    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask(""); // clear input
  };

  // Delete Task
  const deleteTask = (index) => {

    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">

      <h1>Simple ToDo App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;