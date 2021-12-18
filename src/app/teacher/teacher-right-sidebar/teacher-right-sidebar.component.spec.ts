import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRightSidebarComponent } from './teacher-right-sidebar.component';

describe('TeacherRightSidebarComponent', () => {
  let component: TeacherRightSidebarComponent;
  let fixture: ComponentFixture<TeacherRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
