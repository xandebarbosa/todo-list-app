export class Task {
  constructor(text, completed = false, id = Date.now()) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}
