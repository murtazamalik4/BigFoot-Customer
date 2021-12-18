import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudyMaterialComponent } from './admin-study-material.component';

describe('AdminStudyMaterialComponent', () => {
  let component: AdminStudyMaterialComponent;
  let fixture: ComponentFixture<AdminStudyMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudyMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
