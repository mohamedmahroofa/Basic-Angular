import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  message = 'Hello, Angular';

  changeMessage() {
    this.message = 'You have clicked this button';
  }

  resetMessage() {
    this.message = 'Hello, Angular';
  }
}
