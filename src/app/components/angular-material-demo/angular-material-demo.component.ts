import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-demo',
  templateUrl: './angular-material-demo.component.html',
  styleUrls: ['./angular-material-demo.component.css']
})
export class AngularMaterialDemoComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  closePanel() {
    this.panelOpenState = false;
  }
  openPanel() {
    this.panelOpenState = true;
  }

}


// Add the @angular/material package -> ng add @angular/material
// What ever component you want to use just import that in root module
// Use the appropriate tag/directive to get that component work