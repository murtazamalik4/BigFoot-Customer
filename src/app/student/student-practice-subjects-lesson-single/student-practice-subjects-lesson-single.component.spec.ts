import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPracticeSubjectsLessonSingleComponent } from './student-practice-subjects-lesson-single.component';

describe('StudentPracticeSubjectsLessonSingleComponent', () => {
  let component: StudentPracticeSubjectsLessonSingleComponent;
  let fixture: ComponentFixture<StudentPracticeSubjectsLessonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPracticeSubjectsLessonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPracticeSubjectsLessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
