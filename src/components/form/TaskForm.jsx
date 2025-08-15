import useTaskForm from "./useTaskForm";

const TaskForm = ({ onAdd, onUpdate, taskToEdit, setTaskToEdit }) => {
  const { taskText, setTaskText, handleSubmit } = useTaskForm({
    onAdd,
    onUpdate,
    taskToEdit,
    setTaskToEdit,
  });

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
