import React from "react";
import { useTasks } from "hooks/useTasks";
import TaskItem from "components/TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa na lista.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
