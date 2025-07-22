import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;
  private addUrl: string

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.addUrl = 'http://localhost:8080/add_users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.addUrl, user);
  }
}
