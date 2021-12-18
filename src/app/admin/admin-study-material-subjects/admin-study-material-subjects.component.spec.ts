import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudyMaterialSubjectsComponent } from './admin-study-material-subjects.component';

describe('AdminStudyMaterialSubjectsComponent', () => {
  let component: AdminStudyMaterialSubjectsComponent;
  let fixture: ComponentFixture<AdminStudyMaterialSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudyMaterialSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudyMaterialSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
