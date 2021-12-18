import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudyMaterialSubjectsComponent } from './student-study-material-subjects.component';

describe('StudentStudyMaterialSubjectsComponent', () => {
  let component: StudentStudyMaterialSubjectsComponent;
  let fixture: ComponentFixture<StudentStudyMaterialSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStudyMaterialSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStudyMaterialSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
