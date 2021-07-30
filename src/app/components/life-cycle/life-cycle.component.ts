import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnDestroy {
  constructor() {
    console.log('In Constructor...')
  }

  ngOnInit(): void { // initialization of component life
    // OnInit(I) -> need to implement it -> there is method called ngOnInit -> define in your child class
    console.log('Inside ngOnInit..')
    /*
        - Initial data for component/directive -> define/get here
        - This will be called only once in component life cycle
    */

    // birth
  }

  ngOnDestroy() {
    // death component
    // this is a cleanup step
    // Angular will clean the data/resources used by component
    // how can a developer use it --> user defined resource -> we can free here
      // unsubscribe an observable
      // event handler remove
      console.log('Inside ngOnDestroy..')

  }


}
