import React from "react";
import TaskList from "components/TaskList/TaskList";
import TaskForm from "components/ TaskForm/TaskForm";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TaskForm />
      <p className="task-instruction">
        Clique na tarefa para marcar como concluída
      </p>
      <TaskList />

      <div style={{ marginTop: "40px", borderTop: "1px solid #ccc" }}>
        <h5>Desenvolvido por Alexandre dos Santos Barbosa - 2025</h5>
      </div>
    </div>
  );
};

export default HomePage;
