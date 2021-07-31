import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-demo',
  templateUrl: './rest-demo.component.html',
  styleUrls: ['./rest-demo.component.css']
})
export class RestDemoComponent implements OnInit {
  userDetailArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    fetch('https://reqres.in/api/users?page=2', {
      method:'GET'
    })
      .then(res => res.json()) // what ever data i have need to convert it in JSON
      .then((res) => {
        this.userDetailArray = res.data;
        console.log(this.userDetailArray);

      }, (err) => { console.log(err); });
  }
}
// REQUEST_TYPE
/*
GET -> Whenever you want to get data -> in GET you can send data(there is limit in that)
POST -> When you want to transfer large piece of data(no-limit of data transfer)

*/