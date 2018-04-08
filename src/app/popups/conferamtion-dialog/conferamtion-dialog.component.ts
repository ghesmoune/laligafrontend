import { Component,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-conferamtion-dialog',
  templateUrl: './conferamtion-dialog.component.html',
  styleUrls: ['./conferamtion-dialog.component.css']
})
export class ConferamtionDialogComponent  {

  constructor(public dialogRef: MatDialogRef<ConferamtionDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
