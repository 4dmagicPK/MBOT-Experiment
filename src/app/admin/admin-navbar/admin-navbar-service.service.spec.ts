import { TestBed } from '@angular/core/testing';

import { AdminNavbarServiceService } from './admin-navbar-service.service';

describe('AdminNavbarServiceService', () => {
  let service: AdminNavbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNavbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
