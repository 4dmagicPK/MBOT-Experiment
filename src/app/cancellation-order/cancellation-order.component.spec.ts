import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationOrderComponent } from './cancellation-order.component';

describe('CancellationOrderComponent', () => {
  let component: CancellationOrderComponent;
  let fixture: ComponentFixture<CancellationOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancellationOrderComponent]
    });
    fixture = TestBed.createComponent(CancellationOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
