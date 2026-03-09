import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-form',
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css'],
  standalone: false
})
export class UserForm {

  user: User;
  submitting = false;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user = new User();
  }

  onSubmit() {
    this.submitting = true;
    this.error = undefined;

    this.userService.save(this.user).subscribe({
      next: () => {
        this.submitting = false;
        this.gotoUserList();
      },
      error: err => {
        console.error('Failed to save user', err);
        this.error = 'Не удалось сохранить пользователя. Попробуйте ещё раз.';
        this.submitting = false;
      }
    });
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
