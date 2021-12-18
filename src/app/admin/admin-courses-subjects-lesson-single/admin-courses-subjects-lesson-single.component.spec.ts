import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesSubjectsLessonSingleComponent } from './admin-courses-subjects-lesson-single.component';

describe('AdminCoursesSubjectsLessonSingleComponent', () => {
  let component: AdminCoursesSubjectsLessonSingleComponent;
  let fixture: ComponentFixture<AdminCoursesSubjectsLessonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesSubjectsLessonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesSubjectsLessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
