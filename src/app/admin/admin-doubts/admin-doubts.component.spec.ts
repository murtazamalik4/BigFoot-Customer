import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoubtsComponent } from './admin-doubts.component';

describe('AdminDoubtsComponent', () => {
  let component: AdminDoubtsComponent;
  let fixture: ComponentFixture<AdminDoubtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoubtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
