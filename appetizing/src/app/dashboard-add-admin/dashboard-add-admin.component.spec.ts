import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddAdminComponent } from './dashboard-add-admin.component';

describe('DashboardAddAdminComponent', () => {
  let component: DashboardAddAdminComponent;
  let fixture: ComponentFixture<DashboardAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
