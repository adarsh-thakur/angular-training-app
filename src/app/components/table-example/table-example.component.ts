import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'gender', 'age'];
  data: any[] = [
    { name: 'Adarsh Thakur', phone: 12345547, gender: 'Male', email: 'adarsh@mail.com' },
    { name: 'Pranali', phone: 12345547, gender: 'Female', email: 'pranali@mail.com', age: 21 },
    { name: 'Vibha', phone: 12345547, gender: 'Female', email: 'vibha@mail.com' },
    { name: 'Pushpa', phone: 12345547, gender: 'Female', email: 'pushpa@mail.com' },
    { name: 'Bhushan', gender: 'Male', email: 'bhushan@mail.com', age: 21 },
    { name: 'Archana', phone: 12345547, gender: 'Female', email: 'archana@mail.com', age: 21 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
