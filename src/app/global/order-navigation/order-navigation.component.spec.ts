import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavigationComponent } from './order-navigation.component';

describe('OrderNavigationComponent', () => {
  let component: OrderNavigationComponent;
  let fixture: ComponentFixture<OrderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
