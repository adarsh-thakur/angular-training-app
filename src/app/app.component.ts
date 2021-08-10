import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // it tells how this component should be used in HTML -> <app-root></app-root>
  templateUrl: './app.component.html', // the view or html of the component
  styleUrls: ['./app.component.css'] // styles that can will  be applied to component
})
export class AppComponent implements OnInit {
  title = 'This is a Angular Component';
  buttonName = 'Click me';
  showLifeCycleCmp = true;
  onButtonClick() {
    alert("Thanks for clicking the button");
  }
  ngOnInit(){
    setTimeout(() => {
      this.showLifeCycleCmp = false;
    },3000);
    setTimeout(() => { this.showLifeCycleCmp = true; }, 6000);
    // syntax - setTimeOut(function,interval) -> interval in ms
  }
}

// Angular Divides Component in 3 sub-part
// view -> .html -> HTML(template)
// style -> actual styles of component -> CSS
// functional code -> component.ts -> JS(TS)
