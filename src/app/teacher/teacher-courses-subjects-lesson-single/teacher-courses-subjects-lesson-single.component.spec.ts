import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesSubjectsLessonSingleComponent } from './teacher-courses-subjects-lesson-single.component';

describe('TeacherCoursesSubjectsLessonSingleComponent', () => {
  let component: TeacherCoursesSubjectsLessonSingleComponent;
  let fixture: ComponentFixture<TeacherCoursesSubjectsLessonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCoursesSubjectsLessonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCoursesSubjectsLessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
