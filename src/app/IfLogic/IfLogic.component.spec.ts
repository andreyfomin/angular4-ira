/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IfLogicComponent } from './IfLogic.component';

describe('IfLogicComponent', () => {
  let component: IfLogicComponent;
  let fixture: ComponentFixture<IfLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
