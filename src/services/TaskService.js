import { Task } from "../domain/Task";
import { localStorageRepository } from "./localStorageRepository";

export const taskService = {
  getAllTasks: () => {
    return localStorageRepository.getTasks();
  },

  addTask: (text, tasks) => {
    const newTask = new Task(text);
    const newTasks = [...tasks, newTask];
    localStorageRepository.saveTasks(newTasks);
    return newTasks;
  },

  updateTask: (updatedTask, tasks) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    localStorageRepository.saveTasks(newTasks);
    return newTasks;
  },

  deleteTask: (taskId, tasks) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    localStorageRepository.saveTasks(newTasks);
    return newTasks;
  },

  toggleComplete: (taskId, tasks) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorageRepository.saveTasks(newTasks);
    return newTasks;
  },
};
