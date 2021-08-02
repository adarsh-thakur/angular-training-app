import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'; //this router package is important for implementing routing in Angular
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoComponent } from './components/todo/todo.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'hello-world',
    component:HelloWorldComponent
  },
  {
    path: 'counter',
    component:CounterComponent
  },
  {
    path: 'todo',
    component:TodoComponent
  },
  {
    path: 'life-cycle',
    component:LifeCycleComponent
  },
  {
    path: 'user-detail',
    component:UserDetailComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        component:ChildComponent
      }
    ]
  },
  {
    path: '**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }


// Step 1 : Create a AppRoutingModule -> add that inside of app.module
// Step 2 : Define your routes(Array of Object {path,component})
// {
//   path: 'hello-world',
//   component:HelloWorldComponent
// }
// Step 3 : Import Router Module from angular/router package and pass the routes into forRoot()
// Step 4 : Export RouterModule from AppRoutingModule
// Step 5: Add the router-outlet tag in your root component view