import React, { useState } from "react";
import { useTasks } from "hooks/useTasks";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    if (newTitle.trim()) {
      updateTask(task.id, newTitle.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(task.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  const renderViewMode = () => (
    <>
      <span onClick={() => toggleTask(task.id)}>{task.title}</span>
      <div className="task-buttons">
        <button onClick={() => setIsEditing(true)} className="edit-button">
          Editar
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete-button">
          Excluir
        </button>
      </div>
    </>
  );

  const renderEditMode = () => (
    <>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        className="edit-input"
      />
      <div className="task-buttons">
        <button onClick={handleUpdate} className="save-button">
          Salvar
        </button>
        <button onClick={handleCancel} className="cancel-button">
          Cancelar
        </button>
      </div>
    </>
  );

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? renderEditMode() : renderViewMode()}
    </li>
  );
};

export default TaskItem;
