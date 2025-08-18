export class Task {
  constructor(title, id = new Date().getTime(), completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
