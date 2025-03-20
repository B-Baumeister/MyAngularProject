import { Component, computed, Input, signal, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;

  avatar = input<string>(); // input<string> ist ein typescript-Ding --> generic Type
  name = input<string>();
//bisher sind diese signals ausschließlich lesbare signals. also wenn sich was von außen ändert, werden diese aktualisiert. ich kann diese in dem sinne noch nicht ändern
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  // get imagePath() {
  //   return '/assets/users/' + this.avatar;
  // }

  onSelectUser() {}
}
