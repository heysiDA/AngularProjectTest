import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from '../domain/user';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    return this.http.post<User>(this.apiEndpoint, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(this.apiEndpoint, user);
  }

  getUserByLogin(userLogin: string): Observable<User> {
    return this.http.get<User>(`${this.apiEndpoint}/${userLogin}`);
  }

  deleteUser(userLogin: string): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}/${userLogin}`);
  }
}
