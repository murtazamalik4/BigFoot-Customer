import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursesSubjectsLessonsComponent } from './student-courses-subjects-lessons.component';

describe('StudentCoursesSubjectsLessonsComponent', () => {
  let component: StudentCoursesSubjectsLessonsComponent;
  let fixture: ComponentFixture<StudentCoursesSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCoursesSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoursesSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
