import { TestBed, inject } from '@angular/core/testing';

import { ConsolesService } from './consoles.service';

describe('ConsolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolesService]
    });
  });

  it('should be created', inject([ConsolesService], (service: ConsolesService) => {
    expect(service).toBeTruthy();
  }));
});
