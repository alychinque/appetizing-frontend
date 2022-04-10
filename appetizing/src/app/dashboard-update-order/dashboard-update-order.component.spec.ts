import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateOrderComponent } from './dashboard-update-order.component';

describe('DashboardUpdateOrderComponent', () => {
  let component: DashboardUpdateOrderComponent;
  let fixture: ComponentFixture<DashboardUpdateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
