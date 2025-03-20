import { Component, Input, EventEmitter, Output, output } from '@angular/core';

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
  // @Output() select = new EventEmitter();
  select = output<string>(); //hiermit braucht mein nicht mehr speziell sagen, dass es newEventEmitter beinhaltet. Aber Wir müssen jetzt TS sagen, welcher typ die daten sind. Es sind auch keine signals im gegensatz zum input

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
