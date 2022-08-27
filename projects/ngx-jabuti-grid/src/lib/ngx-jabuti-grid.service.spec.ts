import { TestBed } from '@angular/core/testing';

import { NgxJabutiGridService } from './ngx-jabuti-grid.service';

describe('NgxJabutiGridService', () => {
  let service: NgxJabutiGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJabutiGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
