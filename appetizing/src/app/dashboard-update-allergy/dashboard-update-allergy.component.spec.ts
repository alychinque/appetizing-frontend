import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateAllergyComponent } from './dashboard-update-allergy.component';

describe('DashboardUpdateAllergyComponent', () => {
  let component: DashboardUpdateAllergyComponent;
  let fixture: ComponentFixture<DashboardUpdateAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateAllergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
