import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
