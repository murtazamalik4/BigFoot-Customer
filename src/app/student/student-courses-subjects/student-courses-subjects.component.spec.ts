import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursesSubjectsComponent } from './student-courses-subjects.component';

describe('StudentCoursesSubjectsComponent', () => {
  let component: StudentCoursesSubjectsComponent;
  let fixture: ComponentFixture<StudentCoursesSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCoursesSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoursesSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
