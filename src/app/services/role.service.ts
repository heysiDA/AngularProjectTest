import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Role } from '../domain/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiEndpoint = 'api/roles';

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiEndpoint);
  }

  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiEndpoint, role);
  }

  updateRole(role: Role): Observable<Role> {
    return this.http.patch<Role>(this.apiEndpoint, role);
  }

  getRoleByName(roleName: string): Observable<Role> {
    return this.http.get<Role>(`${this.apiEndpoint}/${roleName}`);
  }

  deleteRole(roleName: string): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}/${roleName}`);
  }
}
