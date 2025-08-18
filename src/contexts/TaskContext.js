import React, { createContext, useState, useEffect, useMemo } from "react";
import { TaskService } from "services/TaskService";
import { localStorageRepository } from "services/localStorageRepository";

const taskService = new TaskService(localStorageRepository);

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const allTasks = taskService.getTasks();
    setTasks(allTasks);
  }, []);

  const addTask = (title) => {
    const newTask = taskService.addTask(title);
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };
  const updateTask = (taskId, newTitle) => {
    taskService.updateTask(taskId, newTitle);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  const toggleTask = (taskId) => {
    taskService.toggleTaskCompleted(taskId);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    taskService.deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      updateTask,
      toggleTask,
      deleteTask,
    }),
    [tasks]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
