import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
