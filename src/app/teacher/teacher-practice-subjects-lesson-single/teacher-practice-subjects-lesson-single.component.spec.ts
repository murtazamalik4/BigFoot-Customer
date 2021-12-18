import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPracticeSubjectsLessonSingleComponent } from './teacher-practice-subjects-lesson-single.component';

describe('TeacherPracticeSubjectsLessonSingleComponent', () => {
  let component: TeacherPracticeSubjectsLessonSingleComponent;
  let fixture: ComponentFixture<TeacherPracticeSubjectsLessonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPracticeSubjectsLessonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPracticeSubjectsLessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
