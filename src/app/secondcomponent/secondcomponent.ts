import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'second-app',
  templateUrl: './secondcomponent.html',
  styleUrls: ['./secondcomponent.css'],
  standalone: false
})
export class Secondcomponent implements OnInit {

  users?: User[];
  loading = false;
  error?: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.findAll().subscribe({
      next: data => {
        this.users = data;
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load users', err);
        this.error = 'Не удалось загрузить пользователей. Попробуйте позже.';
        this.loading = false;
      }
    });
  }
}
