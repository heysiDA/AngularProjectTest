import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { User } from '../domain/user';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    const login = route.paramMap.get('login');
    return this.userService.getUserByLogin(login).pipe(
      take(1),
      mergeMap(user => {
        if (user) {
          return of(user);
        } else {
          // login not found
          this.router.navigate(['users']);
          return EMPTY;
        }
      })
    );
  }
}
