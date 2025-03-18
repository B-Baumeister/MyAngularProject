import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationTestComponent } from './animation-test/animation-test.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Butterblume';
}
