import React, { useState, useEffect } from "react";

const TaskForm = ({ onAdd, onUpdate, taskToEdit, setTaskToEdit }) => {
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskText(taskToEdit.text);
    } else {
      setTaskText("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    if (taskToEdit) {
      onUpdate({ ...taskToEdit, text: taskText });
    } else {
      onAdd(taskText);
    }

    setTaskText("");
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-button">
        {taskToEdit ? "Atualizar Tarefa" : "Adicionar Tarefa"}
      </button>
    </form>
  );
};

export default TaskForm;
