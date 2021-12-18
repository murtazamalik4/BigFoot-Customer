import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPracticeSubjectsLessonsComponent } from './teacher-practice-subjects-lessons.component';

describe('TeacherPracticeSubjectsLessonsComponent', () => {
  let component: TeacherPracticeSubjectsLessonsComponent;
  let fixture: ComponentFixture<TeacherPracticeSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPracticeSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPracticeSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
