// src/services/TaskService.js
import { Task } from "./Task";

export class TaskService {
  constructor(repository) {
    this.repository = repository;
  }

  getTasks() {
    return this.repository.getTasks();
  }

  addTask(title) {
    const newTask = new Task(title);
    this.repository.addTask(newTask);
    return newTask;
  }

  updateTask(taskId, newTitle) {
    const tasks = this.repository.getTasks();
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (taskToUpdate) {
      taskToUpdate.title = newTitle;
      this.repository.updateTask(taskToUpdate);
    }
  }

  deleteTask(taskId) {
    this.repository.deleteTask(taskId);
  }

  toggleTaskCompleted(taskId) {
    const tasks = this.repository.getTasks();
    const taskToToggle = tasks.find((task) => task.id === taskId);
    if (taskToToggle) {
      taskToToggle.completed = !taskToToggle.completed;
      this.repository.updateTask(taskToToggle);
    }
  }
}
