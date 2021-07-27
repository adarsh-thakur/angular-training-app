import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  name: string = "Adarsh Thakur";
  divId: number = 45679845456;
  constructor() { }

  ngOnInit(): void {
  }
  click() {
    alert('Heading Clicked')
  }
}
