import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetails: any = [
    {
      name: 'Adarsh Thakur',
      gender: 'Male',
      age:25

    },
    {
      name: 'Pranali',
      gender: 'Female',
      age:22

    },{
      name: 'Vibha',
      gender: 'Female',
      age:21

    },
    {
      name: 'Pushpa',
      gender: 'Female',
      age:20
    },
    {
      name: 'Archana',
      gender: 'Female',
      age:23

    },
    {
      name: 'Bhushan',
      gender: 'Male',
      age:25
    }
  ];
  constructor() {
    for (let user of this.userDetails) {
      console.log(user.name);
      console.log(user.age);
      console.log(user.gender);
    }
  }


  ngOnInit(): void {
  }

}
