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
  }

}
