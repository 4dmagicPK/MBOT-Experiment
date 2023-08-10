import { TestBed } from '@angular/core/testing';

import { CancellationOrderService } from './cancellation-order.service';

describe('CancellationOrderService', () => {
  let service: CancellationOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancellationOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
