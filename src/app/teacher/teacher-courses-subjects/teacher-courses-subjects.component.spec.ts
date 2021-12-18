import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesSubjectsComponent } from './teacher-courses-subjects.component';

describe('TeacherCoursesSubjectsComponent', () => {
  let component: TeacherCoursesSubjectsComponent;
  let fixture: ComponentFixture<TeacherCoursesSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCoursesSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCoursesSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
