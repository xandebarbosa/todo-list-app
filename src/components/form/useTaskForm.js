import { useState, useEffect } from "react";

const useTaskForm = ({ onAdd, onUpdate, taskToEdit, setTaskToEdit }) => {
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
      onUpdate(taskToEdit.id, taskText);
    } else {
      onAdd(taskText);
    }

    setTaskText("");
    setTaskToEdit(null);
  };

  return {
    taskText,
    setTaskText,
    handleSubmit,
  };
};

export default useTaskForm;
