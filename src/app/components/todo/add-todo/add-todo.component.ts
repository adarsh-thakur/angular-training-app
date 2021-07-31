import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  currentTodo: string = '';

  @Output() afterToAdded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.afterToAdded.emit(this.currentTodo);
    this.currentTodo = '';
  }

}
