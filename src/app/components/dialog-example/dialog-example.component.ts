import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    let openedDialogRef = this.dialog.open(DialogContentComponent, {
      height: '500px',
      width: '500px',
      data: {
        name: 'Adarsh Thakur'
      }
      // position: {
      //   bottom: '0',
      //   left:'0'
      // }
    });
    openedDialogRef.afterClosed().subscribe(data => {
      console.log(data);
    })

    // setTimeout(() => {
    //   openedDialogRef.close();
    // }, 5000);
  }

}
