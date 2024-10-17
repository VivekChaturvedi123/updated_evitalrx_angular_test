import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medicine-details-dialog',
  templateUrl: './medicine-details-dialog.component.html',
  styleUrls: ['./medicine-details-dialog.component.scss']
})
export class MedicineDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MedicineDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
