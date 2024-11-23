import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  tasks: string[] = []; // Array to store tasks

  // Function to handle adding tasks
  onAddTask(taskInput: HTMLInputElement) {
    const task = taskInput.value.trim(); // Get the value from input
    if (task) {
      this.addTask(task); // Add the task
      this.resetInput(taskInput); // Clear the input
    }
  }

  // Add task to the array
  addTask(task: string) {
    this.tasks.push(task);
  }

  // Reset the input field
  resetInput(input: HTMLInputElement) {
    input.value = '';
  }

  // Delete a task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
