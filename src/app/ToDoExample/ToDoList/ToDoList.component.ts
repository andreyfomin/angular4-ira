import { TodoService } from './../Todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let todo of todoService.todos">
          {{todo.name}}
        </li>
      </ul>
    </div>
  `
})
export class ToDoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

}
