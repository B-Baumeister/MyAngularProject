import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  // name: string;
  @Input() name!: string;
}
