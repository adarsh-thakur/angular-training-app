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
    this._userService.getMovies();
  }

}


// dev -> qa -> staging(mini prod) -> production

// https://dev-dummyapi.io/data/api/
// https://qa-dummyapi.io/data/api/
// https://stage-dummyapi.io/data/api/
// https://dummyapi.io/data/api/
