import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesSubjectsLessonsComponent } from './admin-courses-subjects-lessons.component';

describe('AdminCoursesSubjectsLessonsComponent', () => {
  let component: AdminCoursesSubjectsLessonsComponent;
  let fixture: ComponentFixture<AdminCoursesSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
