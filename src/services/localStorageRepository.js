// src/services/localStorageRepository.js
import { Task } from "./Task";

const LOCAL_STORAGE_KEY = "tasks";

const getTasks = () => {
  try {
    const storedTasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedTasks) return [];
    return JSON.parse(storedTasks).map(
      (task) => new Task(task.title, task.id, task.completed)
    );
  } catch (error) {
    console.error("Falha ao ler tarefas do localStorage:", error);
    return [];
  }
};

const saveAllTasks = (tasks) => {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Falha ao salvar tarefas no localStorage:", error);
  }
};

const addTask = (task) => {
  const tasks = getTasks();
  tasks.unshift(task);
  saveAllTasks(tasks);
};

const deleteTask = (taskId) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.id !== taskId);
  saveAllTasks(tasks);
};

const updateTask = (updatedTask) => {
  let tasks = getTasks();
  tasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveAllTasks(tasks);
};

export const localStorageRepository = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
};
