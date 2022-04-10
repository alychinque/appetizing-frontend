import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddDrinkComponent } from './dashboard-add-drink.component';

describe('DashboardAddDrinkComponent', () => {
  let component: DashboardAddDrinkComponent;
  let fixture: ComponentFixture<DashboardAddDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
