import { Component, Input, EventEmitter, Output, output } from '@angular/core';

interface User {
  name: string;
  id: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;

  @Output() select = new EventEmitter();
  @Output() selectedUserId?: string;
  // select = output<string>(); //hiermit braucht mein nicht mehr speziell sagen, dass es newEventEmitter beinhaltet. Aber Wir müssen jetzt TS sagen, welcher typ die daten sind. Es sind auch keine signals im gegensatz zum input

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    this.selectedUserId = this.user.id;
  }
}
