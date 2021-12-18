import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDoubtsComponent } from './teacher-doubts.component';

describe('TeacherDoubtsComponent', () => {
  let component: TeacherDoubtsComponent;
  let fixture: ComponentFixture<TeacherDoubtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDoubtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
