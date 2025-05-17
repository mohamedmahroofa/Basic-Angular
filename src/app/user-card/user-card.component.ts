import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  userName: string = 'Ahmed Sheedh Mohamed Mahroof';
  email: string = 'ahm.sheedh@gmail.com';

  showMessage() {
    alert(`Hello ${this.userName}. Profile: ${this.email}`);
  }
}
