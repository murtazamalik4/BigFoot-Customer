import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailComponentComponent } from './bill-detail-component.component';

describe('BillDetailComponentComponent', () => {
  let component: BillDetailComponentComponent;
  let fixture: ComponentFixture<BillDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
