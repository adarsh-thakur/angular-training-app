import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { RestDemoComponent } from './components/rest-demo/rest-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule(
  { // this is a NgModule Decorator -> @decoratorName -> it is way of telling angular what type of data we are providing
    declarations: [
      AppComponent,
      HelloWorldComponent,
      CounterComponent,
      UserDetailComponent,
      LifeCycleComponent,
      TodoComponent,
      AddTodoComponent,
      TodoListComponent,
      RestDemoComponent,
      PageNotFoundComponent,
      HomeComponent,
      ParentComponent,
      ChildComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  }
)


  /*
  @decoratorName(object) -> we have to feed it a object -> object will have metadata about your module
  object -> {
    declaration : [] -> // all the component,services under this module must be declare here.
    imports: [] ->// all the dependent module that has been used in this module(subsequent component)
    providers: [] -> // object of the service that need to be injected
    bootstrap:[] -> // the components to load when this module loads
  }
  */
export class AppModule { }




// -------------------------- TS ----------------------------

// Typescript - Language Build upon JS -> Superset of javascript
// TS -> Transpile -> JS
// Providing a static type checking to JS
/*
JS
let foo;
foo = 10;
OR
foo = "This if Fu";
OR
foo = true;

function x(){
  foo * 2;
}


TS
let foo:number;

foo = 10;
// after 1000 lines of code

foo = "This is a Fu";  -> this will give a type error

*/