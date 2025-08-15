import React from "react";

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span
              onClick={() => onToggleComplete(task.id)}
              className="task-text"
            >
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
        ))
      )}
    </ul>
  );
};

export default TaskList;
