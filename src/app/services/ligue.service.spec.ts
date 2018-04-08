import { TestBed, inject } from '@angular/core/testing';

import { LigueService } from './ligue.service';

describe('LigueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LigueService]
    });
  });

  it('should be created', inject([LigueService], (service: LigueService) => {
    expect(service).toBeTruthy();
  }));
});
