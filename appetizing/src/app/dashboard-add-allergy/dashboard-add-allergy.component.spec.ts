import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddAllergyComponent } from './dashboard-add-allergy.component';

describe('DashboardAddAllergyComponent', () => {
  let component: DashboardAddAllergyComponent;
  let fixture: ComponentFixture<DashboardAddAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddAllergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
