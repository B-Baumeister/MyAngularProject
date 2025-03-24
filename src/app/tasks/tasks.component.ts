import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  // name: string;
  @Input() name!: string;
}
