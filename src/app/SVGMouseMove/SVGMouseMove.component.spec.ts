/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SVGMouseMoveComponent } from './SVGMouseMove.component';

describe('SVGMouseMoveComponent', () => {
  let component: SVGMouseMoveComponent;
  let fixture: ComponentFixture<SVGMouseMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGMouseMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGMouseMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
