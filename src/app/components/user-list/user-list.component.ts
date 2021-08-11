import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns = ["picture", "title", "name", "email", "id",];
  data: any[] = [];
  showLoader: boolean = true;
  obsObject = new Observable();
  constructor(private _userUser: UserService) { }

  ngOnInit(): void {
    this._userUser.getUser().subscribe((response: any) => {
      this.showLoader = false;
      this.data = response.data;
    }, err => {
    });
  }

}
