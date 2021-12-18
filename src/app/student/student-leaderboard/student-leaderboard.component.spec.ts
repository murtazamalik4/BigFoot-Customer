import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeaderboardComponent } from './student-leaderboard.component';

describe('StudentLeaderboardComponent', () => {
  let component: StudentLeaderboardComponent;
  let fixture: ComponentFixture<StudentLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
