import { TestBed, inject } from '@angular/core/testing';

import { NYTService } from './nyt.service';

describe('NYTServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NYTService]
    });
  });

  it('should be created', inject([NYTService], (service: NYTService) => {
    expect(service).toBeTruthy();
  }));
});
