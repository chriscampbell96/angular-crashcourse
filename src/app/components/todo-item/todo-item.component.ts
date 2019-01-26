import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  
  }

  //Set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }  
  return classes;
  }

  //onToggle
  onToggle(todo){
    // Toggle linethrough
    todo.completed = !todo.completed;
  
    // Toggle server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      {
        console.log('updated');
      });

  }

    //on delete
    onDelete(todo){
      console.log('dellll');
      this.deleteTodo.emit(todo);
    }
  


}
