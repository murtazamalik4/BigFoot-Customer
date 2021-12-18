import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomheaderComponent } from './customheader.component';

describe('CustomheaderComponent', () => {
  let component: CustomheaderComponent;
  let fixture: ComponentFixture<CustomheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
