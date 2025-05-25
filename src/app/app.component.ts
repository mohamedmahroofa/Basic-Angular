import { Component } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
// import { RouterOutlet } from '@angular/router';

interface User {
  name: string;
  email: string;
  age: number;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user1: User = {
    name: 'Ahmed Sheedh Mohamed Mahroof',
    email: 'ahm.sheedh@gmail.com',
    age: 31,
    imageUrl: 'https://picsum.photos/100?random=1',
  };
  user2: User = {
    name: 'Lina Sadhaka Habeeb Abdul Kader',
    email: 'lina.sadhaka@gmail.com',
    age: 23,
    imageUrl: 'https://picsum.photos/100?random=2',
  };
  user3: User = {
    name: 'Amina Mahroof',
    email: 'amina.mahroof@gmail.com',
    age: 24,
    imageUrl: 'https://picsum.photos/100?random=3',
  };
  user4: User = {
    name: 'Syed Haja Haneef',
    email: 'haneef.haja@gmail.com',
    age: 38,
    imageUrl: 'https://picsum.photos/100?random=4',
  };
  user5: User = {
    name: 'Midha Amina',
    email: 'midha.amina@gmail.com',
    age: 42,
    imageUrl: 'https://picsum.photos/100?random=5',
  };
}
