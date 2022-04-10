import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateAdminComponent } from './dashboard-update-admin.component';

describe('DashboardUpdateAdminComponent', () => {
  let component: DashboardUpdateAdminComponent;
  let fixture: ComponentFixture<DashboardUpdateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
