import { stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe((data:any) => {
      console.log(data);
    })
    // this._userService.getUserById("60d0fe4f5311236168a109ca").subscribe((data) =>
    // {
    //   console.log('###############################Inside SUCCESS Block#########################################################################################')
    //   console.log(data);
    // }, (err) => {
    //   console.log('###############################Inside ERROR Block#########################################################################################')
    //   console.log(err)
    // });
  }

}


// dev -> qa -> staging(mini prod) -> production

// https://dev-dummyapi.io/data/api/
// https://qa-dummyapi.io/data/api/
// https://stage-dummyapi.io/data/api/
// https://dummyapi.io/data/api/
