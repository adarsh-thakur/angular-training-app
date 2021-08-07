import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  phoneFormControl = new FormControl('', [
    Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email, //abc@domai.com
  ]);
  genderFormControl = new FormControl('', []);

  displayedColumns: string[] = ['name', 'email', 'phone', 'gender', 'age'];
  userList: any[] = [
    { name: 'Adarsh Thakur', phone: 12345547, gender: 'Male', email: 'adarsh@mail.com' },
    { name: 'Adarsh Thakur', gender: 'Male', email: 'adarsh@mail.com',age:24 },
    { name: 'Adarsh Thakur', phone: 12345547, gender: 'Male', email: 'adarsh@mail.com' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
  save() {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.phoneFormControl.valid) {
      let user = {
        name: this.nameFormControl.value,
        phone: this.phoneFormControl.value,
        gender: this.genderFormControl.value,
        email: this.emailFormControl.value,
      }

      this.userList.push(user);
      this.reset();
    } else {
      this.nameFormControl.markAsTouched();
      this.emailFormControl.markAsTouched();
      this.phoneFormControl.markAsTouched();
    }
  }
  reset() {
    this.nameFormControl.reset();
    this.phoneFormControl.reset();
    this.genderFormControl.reset();
    this.emailFormControl.reset();
  }
}