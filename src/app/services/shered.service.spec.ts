import { TestBed, inject } from '@angular/core/testing';

import { SheredService } from './shered.service';

describe('SheredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheredService]
    });
  });

  it('should be created', inject([SheredService], (service: SheredService) => {
    expect(service).toBeTruthy();
  }));
});
