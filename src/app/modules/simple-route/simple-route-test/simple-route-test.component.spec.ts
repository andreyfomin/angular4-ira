import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRouteTestComponent } from './simple-route-test.component';

describe('SimpleRouteTestComponent', () => {
  let component: SimpleRouteTestComponent;
  let fixture: ComponentFixture<SimpleRouteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRouteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRouteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
