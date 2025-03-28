import { Component, Input, EventEmitter, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;
  @Input({ required: true }) selected!: boolean;
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
