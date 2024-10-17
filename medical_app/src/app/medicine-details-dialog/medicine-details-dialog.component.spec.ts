import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDetailsDialogComponent } from './medicine-details-dialog.component';

describe('MedicineDetailsDialogComponent', () => {
  let component: MedicineDetailsDialogComponent;
  let fixture: ComponentFixture<MedicineDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicineDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(MedicineDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
