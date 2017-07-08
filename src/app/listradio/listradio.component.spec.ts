/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListradioComponent } from './listradio.component';

describe('ListradioComponent', () => {
  let component: ListradioComponent;
  let fixture: ComponentFixture<ListradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});