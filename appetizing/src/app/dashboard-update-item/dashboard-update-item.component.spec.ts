import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateItemComponent } from './dashboard-update-item.component';

describe('DashboardUpdateItemComponent', () => {
  let component: DashboardUpdateItemComponent;
  let fixture: ComponentFixture<DashboardUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
