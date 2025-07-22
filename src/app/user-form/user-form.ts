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

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User();
  }

   onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
