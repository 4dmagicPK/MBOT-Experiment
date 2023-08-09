import { TestBed } from '@angular/core/testing';

import { SingleOrderService } from './single-order.service';

describe('SingleOrderService', () => {
  let service: SingleOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
