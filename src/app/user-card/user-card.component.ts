import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() userName: string = '';
  @Input() email: string = '';

  showMessage() {
    alert(`Hello ${this.userName}! Profile: ${this.email}`);
  }
}
