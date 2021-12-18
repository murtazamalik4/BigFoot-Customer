import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudyMaterialComponent } from './teacher-study-material.component';

describe('TeacherStudyMaterialComponent', () => {
  let component: TeacherStudyMaterialComponent;
  let fixture: ComponentFixture<TeacherStudyMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudyMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
