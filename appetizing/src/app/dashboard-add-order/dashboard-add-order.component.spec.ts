import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddOrderComponent } from './dashboard-add-order.component';

describe('DashboardAddOrderComponent', () => {
  let component: DashboardAddOrderComponent;
  let fixture: ComponentFixture<DashboardAddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
