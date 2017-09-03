import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJSONFileComponent } from './read-jsonfile.component';

describe('ReadJSONFileComponent', () => {
  let component: ReadJSONFileComponent;
  let fixture: ComponentFixture<ReadJSONFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJSONFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJSONFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
