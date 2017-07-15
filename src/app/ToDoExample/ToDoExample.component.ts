import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-example',
  template: `
    <div>
      <app-todo-input>
      </app-todo-input>
      <app-todo-list>
      </app-todo-list>
    </div>
  `
})
export class ToDoExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
