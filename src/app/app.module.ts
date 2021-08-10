import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AngularMaterialDemoComponent } from './components/angular-material-demo/angular-material-demo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RxjsDemoComponent } from './components/rxjs-demo/rxjs-demo.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import {MatTableModule} from '@angular/material/table';
import { ServiceExampleComponent } from './components/service-example/service-example.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { UserListComponent } from './components/user-list/user-list.component';
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
      AngularMaterialDemoComponent,
      ChildComponent,
      FormExampleComponent,
      RxjsDemoComponent,
      TableExampleComponent,
      ServiceExampleComponent,
      SideBarComponent,
      DialogExampleComponent,
      DialogContentComponent,
      UserListComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule,
      MatTableModule,
      MatButtonModule,
      MatInputModule, // input fields
      MatSelectModule, //select box
      MatCardModule,
      MatIconModule,
      HttpClientModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatDialogModule,
      MatSidenavModule,
      MatListModule,
      MatExpansionModule,
      BrowserAnimationsModule
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