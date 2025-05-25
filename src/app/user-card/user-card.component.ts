import { Component, Input } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  imageUrl: string;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user: User = { name: '', email: '', age: 0, imageUrl: '' };

  showMessage() {
    alert(`User: ${this.user.name}. Profile: ${this.user.email}`);
  }
}
