import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-mouse-move',
  template: `
    <svg id="svg" width="600px" height="400px" style="background-color: red;"
      (mousemove)="mouseMove($event)">
    </svg>
  `
})
export class SVGMouseMoveComponent implements OnInit {

  constructor() { }

  mouseMove(event) {
    console.log('Position x: ' + event.clientX + ' y: ' + event.clientY);
  }

  ngOnInit() {
  }

}
