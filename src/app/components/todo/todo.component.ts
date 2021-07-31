import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onToDoAdded(toDo:string) {
    this.todoList.push(toDo);
    console.log('I am inside the parent, This is my latest TODO ' + this.todoList);
}
}
