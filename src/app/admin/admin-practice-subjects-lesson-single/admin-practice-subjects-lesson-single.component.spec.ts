import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeSubjectsLessonSingleComponent } from './admin-practice-subjects-lesson-single.component';

describe('AdminPracticeSubjectsLessonSingleComponent', () => {
  let component: AdminPracticeSubjectsLessonSingleComponent;
  let fixture: ComponentFixture<AdminPracticeSubjectsLessonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPracticeSubjectsLessonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPracticeSubjectsLessonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
