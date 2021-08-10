import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
  animal: string = '';
  hobby: string = '';
  constructor(
    public ref: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { };

  onNoClick(): void {
    this.ref.close();
  }
  onSave() {
    this.ref.close({
      animal: this.animal,
      hobby: this.hobby
    });
  }
  ngOnInit() {

  }

}
