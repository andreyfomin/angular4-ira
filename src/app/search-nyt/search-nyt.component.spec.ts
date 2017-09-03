import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNYTComponent } from './search-nyt.component';

describe('SearchNYTComponent', () => {
  let component: SearchNYTComponent;
  let fixture: ComponentFixture<SearchNYTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNYTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNYTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
