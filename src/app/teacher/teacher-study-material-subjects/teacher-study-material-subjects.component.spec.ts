import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudyMaterialSubjectsComponent } from './teacher-study-material-subjects.component';

describe('TeacherStudyMaterialSubjectsComponent', () => {
  let component: TeacherStudyMaterialSubjectsComponent;
  let fixture: ComponentFixture<TeacherStudyMaterialSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudyMaterialSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudyMaterialSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
