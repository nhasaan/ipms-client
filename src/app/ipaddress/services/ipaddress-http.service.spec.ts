import { TestBed } from '@angular/core/testing';

import { IpaddressHttpService } from './ipaddress-http.service';

describe('IpaddressHttpService', () => {
  let service: IpaddressHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpaddressHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
