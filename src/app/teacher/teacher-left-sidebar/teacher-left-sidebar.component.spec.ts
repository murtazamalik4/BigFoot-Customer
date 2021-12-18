import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLeftSidebarComponent } from './teacher-left-sidebar.component';

describe('TeacherLeftSidebarComponent', () => {
  let component: TeacherLeftSidebarComponent;
  let fixture: ComponentFixture<TeacherLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherLeftSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
