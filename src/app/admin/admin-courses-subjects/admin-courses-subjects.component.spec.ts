import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesSubjectsComponent } from './admin-courses-subjects.component';

describe('AdminCoursesSubjectsComponent', () => {
  let component: AdminCoursesSubjectsComponent;
  let fixture: ComponentFixture<AdminCoursesSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
