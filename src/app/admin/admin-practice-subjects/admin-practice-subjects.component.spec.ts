import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPracticeSubjectsComponent } from './admin-practice-subjects.component';

describe('AdminPracticeSubjectsComponent', () => {
  let component: AdminPracticeSubjectsComponent;
  let fixture: ComponentFixture<AdminPracticeSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPracticeSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPracticeSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
