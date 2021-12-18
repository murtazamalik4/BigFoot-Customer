import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPracticeSubjectsLessonsComponent } from './student-practice-subjects-lessons.component';

describe('StudentPracticeSubjectsLessonsComponent', () => {
  let component: StudentPracticeSubjectsLessonsComponent;
  let fixture: ComponentFixture<StudentPracticeSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPracticeSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPracticeSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
