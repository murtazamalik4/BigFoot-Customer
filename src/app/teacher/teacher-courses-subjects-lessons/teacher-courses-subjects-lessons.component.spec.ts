import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesSubjectsLessonsComponent } from './teacher-courses-subjects-lessons.component';

describe('TeacherCoursesSubjectsLessonsComponent', () => {
  let component: TeacherCoursesSubjectsLessonsComponent;
  let fixture: ComponentFixture<TeacherCoursesSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCoursesSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCoursesSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
