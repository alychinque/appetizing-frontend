import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateDrinkComponent } from './dashboard-update-drink.component';

describe('DashboardUpdateDrinkComponent', () => {
  let component: DashboardUpdateDrinkComponent;
  let fixture: ComponentFixture<DashboardUpdateDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
