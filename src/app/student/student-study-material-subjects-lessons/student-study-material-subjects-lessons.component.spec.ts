import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudyMaterialSubjectsLessonsComponent } from './student-study-material-subjects-lessons.component';

describe('StudentStudyMaterialSubjectsLessonsComponent', () => {
  let component: StudentStudyMaterialSubjectsLessonsComponent;
  let fixture: ComponentFixture<StudentStudyMaterialSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStudyMaterialSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStudyMaterialSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
