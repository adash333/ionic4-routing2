import { Injectable } from '@angular/core';

interface Todo {
  id: string,
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() {

    // Set some test todos
    this.todos = [
      { id: 'todo-one', title: 'Todo One', description: 'Do Stuff' },
      { id: 'todo-two', title: 'Todo Two', description: 'Do Stuff' },
      { id: 'todo-three', title: 'Todo Three', description: 'Do Stuff' },
      { id: 'todo-four', title: 'Todo Four', description: 'Do Stuff' },
      { id: 'todo-five', title: 'Todo Five', description: 'Do Stuff' },
      { id: 'todo-six', title: 'Todo Six', description: 'Do Stuff' },
      { id: 'todo-seven', title: 'Todo Seven', description: 'Do Stuff' }
    ];

   }

  getTodo(id) {
    return this.todos.find(todo => todo.id === id);
  }
}
