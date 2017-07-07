import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: `
    <button (click)="decrement();">Substract</button>
    <input type="text" [value]="childValue">
    <button (click)="increment();">Add</button>
  `,
})
export class ChildComponent implements OnInit {
  @Input() childValue = 3;
  @Output() childValueChange = new EventEmitter();

  constructor() {
    console.log('constructor childValue =' + this.childValue);
  }

  increment() {
    this.childValue++;
    this.childValueChange.emit(
      {
        value: this.childValue
      }
    );
  }

  decrement() {
    this.childValue--;
    this.childValueChange.emit(
      {
        value: this.childValue
      }
    );
  }

  ngOnInit() {
  }

}
