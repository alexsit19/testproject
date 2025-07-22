import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
 
      this.userService.findAll().subscribe(data => {
        this.users = data;
  });
  }
}
