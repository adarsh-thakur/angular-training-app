import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
    title: new FormControl('', []),
    firstName: new FormControl('', []),
    lastName: new FormControl('', []),
    gender: new FormControl('', []),
    email: new FormControl('', []),
    dateOfBirth: new FormControl(new Date(), []),
    phone: new FormControl('', []),
  });
  constructor() { }

  ngOnInit(): void {
  }
  reset() {
    this.userForm.reset();
  }
  save() {
    console.log(this.userForm.value)
  }
}
