import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { Role } from '../domain/role';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiEndpoint = 'api/roles';

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiEndpoint);
  }

  createRole(newRole: Role): Observable<Role> {
    return this.http.post<Role>(this.apiEndpoint, newRole).pipe(
      map(role => role),
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

  updateRole(role: Role): Observable<Role> {
    return this.http.patch<Role>(this.apiEndpoint, role);
  }

  getRoleByName(roleName: string): Observable<Role> {
    return this.http.get<Role>(`${this.apiEndpoint}/${roleName}`).pipe(
      map(role => role),
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

  deleteRole(roleName: string): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}/${roleName}`);
  }
}
