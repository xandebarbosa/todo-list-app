import React, { useState, useEffect } from "react";
import { taskService } from "./services/TaskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Carrega as tarefas do serviço na inicialização
  useEffect(() => {
    setTasks(taskService.getAllTasks());
  }, []);

  const handleAddTask = (text) => {
    const newTasks = taskService.addTask(text, tasks);
    setTasks(newTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    const newTasks = taskService.updateTask(updatedTask, tasks);
    setTasks(newTasks);
  };

  const handleToggleComplete = (taskId) => {
    const newTasks = taskService.toggleComplete(taskId, tasks);
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = taskService.deleteTask(taskId, tasks);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lista de Tarefas</h1>
      </header>
      <main className="app-main">
        <TaskForm
          onAdd={handleAddTask}
          onUpdate={handleUpdateTask}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
          onEdit={setTaskToEdit}
        />
      </main>
    </div>
  );
};

export default App;
