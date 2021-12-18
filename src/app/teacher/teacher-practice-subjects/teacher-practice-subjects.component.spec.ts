import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPracticeSubjectsComponent } from './teacher-practice-subjects.component';

describe('TeacherPracticeSubjectsComponent', () => {
  let component: TeacherPracticeSubjectsComponent;
  let fixture: ComponentFixture<TeacherPracticeSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPracticeSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPracticeSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
