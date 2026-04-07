import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl: string;
  private addUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = `${environment.apiBaseUrl}/users`;
    this.addUrl = `${environment.apiBaseUrl}/add_users`;
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>('findAll'))
    );
  }

  public save(user: User) {
    return this.http.post<User>(this.addUrl, user).pipe(
      catchError(this.handleError<User>('save'))
    );
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return throwError(() => error);
    };
  }
}
