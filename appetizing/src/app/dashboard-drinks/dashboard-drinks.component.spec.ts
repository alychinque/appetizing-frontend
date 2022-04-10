import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDrinksComponent } from './dashboard-drinks.component';

describe('DashboardDrinksComponent', () => {
  let component: DashboardDrinksComponent;
  let fixture: ComponentFixture<DashboardDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
