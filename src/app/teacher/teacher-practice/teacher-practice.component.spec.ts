import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPracticeComponent } from './teacher-practice.component';

describe('TeacherPracticeComponent', () => {
  let component: TeacherPracticeComponent;
  let fixture: ComponentFixture<TeacherPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
