import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPracticeComponent } from './student-practice.component';

describe('StudentPracticeComponent', () => {
  let component: StudentPracticeComponent;
  let fixture: ComponentFixture<StudentPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
