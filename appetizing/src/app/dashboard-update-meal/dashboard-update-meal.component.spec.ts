import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateMealComponent } from './dashboard-update-meal.component';

describe('DashboardUpdateMealComponent', () => {
  let component: DashboardUpdateMealComponent;
  let fixture: ComponentFixture<DashboardUpdateMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
