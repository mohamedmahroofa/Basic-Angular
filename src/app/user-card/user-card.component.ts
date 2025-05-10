import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  name = 'Ahmed Sheedh Mohamed Mahroof';
  age = 31;
  city = 'Toronto';
  showMessage = false;

  showThisMessage() {
    this.showMessage = !this.showMessage;
  }
}
