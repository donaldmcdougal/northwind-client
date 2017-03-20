import { TestBed, inject } from '@angular/core/testing';

import { NorthwindService } from './northwind.service';

describe('NorthwindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NorthwindService]
    });
  });

  it('should ...', inject([NorthwindService], (service: NorthwindService) => {
    expect(service).toBeTruthy();
  }));
});
