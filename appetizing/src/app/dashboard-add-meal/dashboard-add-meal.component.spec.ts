import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddMealComponent } from './dashboard-add-meal.component';

describe('DashboardAddMealComponent', () => {
  let component: DashboardAddMealComponent;
  let fixture: ComponentFixture<DashboardAddMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
