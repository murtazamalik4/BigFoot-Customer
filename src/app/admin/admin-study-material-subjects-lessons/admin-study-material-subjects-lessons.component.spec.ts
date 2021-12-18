import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudyMaterialSubjectsLessonsComponent } from './admin-study-material-subjects-lessons.component';

describe('AdminStudyMaterialSubjectsLessonsComponent', () => {
  let component: AdminStudyMaterialSubjectsLessonsComponent;
  let fixture: ComponentFixture<AdminStudyMaterialSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudyMaterialSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudyMaterialSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
