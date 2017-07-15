import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-events',
  template: `
  <div>
    <input type="text" #myInput>
    <button (mouseover)="mouseEvent($event, myInput.value)">
      Mouse Over
    </button>
  </div>
  `
})
export class MouseEventsComponent implements OnInit {
  mouseCount = 0;
  constructor() { }

  mouseEvent(event, value) {
    ++this.mouseCount;
    console.log('mouse count: ' + this.mouseCount);
    console.log(event, value);
  }

  ngOnInit() {
  }

}
