import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddItemComponent } from './dashboard-add-item.component';

describe('DashboardAddItemComponent', () => {
  let component: DashboardAddItemComponent;
  let fixture: ComponentFixture<DashboardAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
