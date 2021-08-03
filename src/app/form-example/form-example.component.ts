import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  name = "Adarsh";
  nameFormControl = new FormControl('Thakur', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.maxLength(5)]);
  constructor() { }

  ngOnInit(): void {
    this.nameFormControl.valueChanges.subscribe((data) => {
      console.log(data)
    })
    this.phoneFormControl.valueChanges.subscribe((data) => {
      console.log(data.toString().length)
      if (data.length > 5) {
        alert('Hey Only 5 character allowed')
      }
    })
  }
  buttonClick() {
    console.log(this.name)
    console.log(this.phoneFormControl)
    console.log(this.nameFormControl);
  }
  print() {
  console.log(this.name)
}
}

// formControl
