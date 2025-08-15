import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggleComplete(task.id)} className="task-text">
        {task.text}
      </span>
      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
          className="action-button edit-button"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="action-button delete-button"
        >
          Remover
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
