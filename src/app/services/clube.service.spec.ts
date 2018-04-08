import { TestBed, inject } from '@angular/core/testing';

import { ClubeService } from './clube.service';

describe('ClubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubeService]
    });
  });

  it('should be created', inject([ClubeService], (service: ClubeService) => {
    expect(service).toBeTruthy();
  }));
});
