import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRightSidebarComponent } from './student-right-sidebar.component';

describe('StudentRightSidebarComponent', () => {
  let component: StudentRightSidebarComponent;
  let fixture: ComponentFixture<StudentRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
