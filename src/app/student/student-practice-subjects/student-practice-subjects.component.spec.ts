import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPracticeSubjectsComponent } from './student-practice-subjects.component';

describe('StudentPracticeSubjectsComponent', () => {
  let component: StudentPracticeSubjectsComponent;
  let fixture: ComponentFixture<StudentPracticeSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPracticeSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPracticeSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
