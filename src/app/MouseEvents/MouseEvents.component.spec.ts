/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MouseEventsComponent } from './MouseEvents.component';

describe('MouseEventsComponent', () => {
  let component: MouseEventsComponent;
  let fixture: ComponentFixture<MouseEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
