import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <app-child-comp
        [childValue]="parentValue"
        (childValueChange)="reportValueChange($event)">
      </app-child-comp>
    </div>
  `
})
export class ParentComponent implements OnInit {
  public parentValue = 77;

  constructor() {
    console.log('constructor parentValue = ' + this.parentValue);
  }

  reportValueChange(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
