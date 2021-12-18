import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeSubjectsLessonsComponent } from './admin-practice-subjects-lessons.component';

describe('AdminPracticeSubjectsLessonsComponent', () => {
  let component: AdminPracticeSubjectsLessonsComponent;
  let fixture: ComponentFixture<AdminPracticeSubjectsLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPracticeSubjectsLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPracticeSubjectsLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
