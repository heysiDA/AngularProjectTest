import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Role } from '../domain/role';
import { RoleService } from '../services/role.service';


@Injectable({
  providedIn: 'root'
})
export class RoleResolver implements Resolve<Role> {
  constructor(private roleService: RoleService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Role | Observable<Role> | Promise<Role> {
    const name = route.paramMap.get('name');
    return this.roleService.getRoleByName(name).pipe(
      take(1),
      mergeMap(role => {
        if (role) {
          return of(role);
        } else {
          // login not found
          this.router.navigate(['roles']);
          return EMPTY;
        }
      })
    );
  }
}
