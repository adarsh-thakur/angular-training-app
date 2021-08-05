import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  counter = 1;
  constructor() { }

  ngOnInit(): void {
    this.counter = 2;

    // ############################################################################
    // Native Way
    this.funThatTakesTime();
    this.printCounter();

    // ############################################################################
    // Promise Way
    // this.funThatTakesTime().then(data => {
    //   this.printCounter();
    // })

    // ############################################################################
    // Rxjs Way
    // this.funThatTakesTime().subscribe(data => {
    //   this.printCounter();
    // })
  }
  funThatTakesTime() {
    // ############################################################################
    // Native Way
    setTimeout(() => {
      this.counter++;
    }, 5000);

    // ############################################################################
    // Promise Way
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     this.counter++;
    //     resolve(this.counter);
    //   }, 5000);
    // })

    // ############################################################################
    // Rxjs Way

    // return new Observable(observer => {
    //   // setTimeout(() => {
    //   //   this.counter++;
    //   //   observer.next(this.counter);
    //   // }, 5000);

    //   setInterval(() => {
    //     this.counter++;
    //     observer.next(this.counter);
    //   }, 5000);
    // })
  }
  printCounter() {
    let div = document.createElement('DIV')
    div.innerHTML = `Value of Counter ${this.counter}`;
    document.getElementById('wrapper')?.append(div);
  }
}
