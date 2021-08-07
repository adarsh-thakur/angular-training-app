import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: any[] = [];
@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'age', 'gender'];
  data = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
