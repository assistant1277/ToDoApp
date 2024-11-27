import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  tasks: string[]=[]; 
  onAddTask(taskInput:HTMLInputElement) {
    const task=taskInput.value.trim(); 
    if (task) {
      this.addTask(task); 
      this.resetInput(taskInput); 
    }
  }

  addTask(task:string) {
    this.tasks.push(task);
  }

  resetInput(input:HTMLInputElement) {
    input.value='';
  }

  deleteTask(index:number) {
    this.tasks.splice(index,1);
  }
}