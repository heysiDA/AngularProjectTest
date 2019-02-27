import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from '../domain/user';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiEndpoint = 'api/users';

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiEndpoint);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiEndpoint, user).pipe(
      map(result => result),
      catchError((responseError, caught) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: responseError.error.message
        });
        return of(undefined);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(this.apiEndpoint, user).pipe(
      map(result => result),
      catchError((responseError, caught) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: responseError.error.message
        });
        return of(undefined);
      })
    );
  }

  getUserByLogin(userLogin: string): Observable<User> {
    return this.http.get<User>(`${this.apiEndpoint}/${userLogin}`).pipe(
      map(user => user),
      catchError((responseError, caught) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: responseError.error.message
        });
        return of(undefined);
      })
    );
  }

  deleteUser(userLogin: string): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}/${userLogin}`);
  }
}
