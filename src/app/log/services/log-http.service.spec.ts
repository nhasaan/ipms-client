import { TestBed } from '@angular/core/testing';

import { LogHttpService } from './log-http.service';

describe('LogHttpService', () => {
  let service: LogHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
