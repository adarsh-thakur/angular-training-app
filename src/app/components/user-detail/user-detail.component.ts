import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetails: any = [
    {
      name: 'Adarsh',
      age:26
    }
  ];
  name: string = '';
  age: number = 0;
  constructor() {
  }


  ngOnInit(): void {
  }

  addUserToList() {
    let user = {
      name: this.name,
      age: this.age
    };
    this.userDetails.push(user)
    this.name = '';
    this.age = 0;
    }
}
