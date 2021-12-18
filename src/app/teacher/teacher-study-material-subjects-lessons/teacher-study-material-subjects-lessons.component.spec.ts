import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudyMaterialSubjectsLessonsComponent } from './teacher-study-material-subjects-lessons.component';

describe('TeacherStudyMaterialSubjectsLessonsComponent', () => {
  let component: TeacherStudyMaterialSubjectsLessonsComponent;
  let fixture: ComponentFixture<TeacherStudyMaterialSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudyMaterialSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudyMaterialSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
