import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {
  userData: any;
  showLoading: boolean = true;
  //injecting a service into a component
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    // let fetchUserObservable = this.userService.fetchUserData();
    // fetchUserObservable.subscribe((data) => this.notified(data));

    // ShortHand
    this.userService.fetchUserData().subscribe((data) => this.notified(data));
  }
  notified(data: any) {
    console.log(data.data);
    this.userData = data.data;
    this.showLoading = false;
  }
}

