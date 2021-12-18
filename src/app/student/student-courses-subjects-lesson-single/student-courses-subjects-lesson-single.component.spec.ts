import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursesSubjectsLessonSingleComponent } from './student-courses-subjects-lesson-single.component';

describe('StudentCoursesSubjectsLessonSingleComponent', () => {
  let component: StudentCoursesSubjectsLessonSingleComponent;
  let fixture: ComponentFixture<StudentCoursesSubjectsLessonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCoursesSubjectsLessonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoursesSubjectsLessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
