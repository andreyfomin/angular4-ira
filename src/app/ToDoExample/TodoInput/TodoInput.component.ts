import { TodoService } from './../Todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <div>
      <input type="text" #myInput>
      <button (click)="mouseEvent(myInput.value)">
        Add Name
      </button>
    </div>
  `
})
export class TodoInputComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  mouseEvent(value) {
    if ((value != null) && (value.length > 0)) {
      this.todoService.todos.push(value);
      console.log('todos: ' + this.todoService.todos);
    } else {
      console.log('value must be non-null');
    }
  }

  ngOnInit() {
  }
}
