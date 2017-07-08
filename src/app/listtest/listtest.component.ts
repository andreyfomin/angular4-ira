import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtest',
  template: `
    <div *ngFor='let item of items'>
      {{item}}
    </div>
  `
})
export class ListtestComponent implements OnInit {
  items = [];
  constructor() {
    this.items = ['one', 'two', 'three', 'four'];
  }

  ngOnInit() {
  }

}
