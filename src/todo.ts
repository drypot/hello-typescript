export class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false) {
  }

  printDetails(): void {
    console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`)
  }
}

export class TodoCollection {
  private nextId: number = 1

  constructor(
    public userName: string,
    public todoItems: TodoItem[] = []) {
    // no statements required
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++
    }
    this.todoItems.push(new TodoItem(this.nextId, task))
    return this.nextId
  }

  getTodoById(id: number): TodoItem | undefined {
    return this.todoItems.find(item => item.id === id)
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id)
    if (todoItem) {
      todoItem.complete = complete
    }
  }
}