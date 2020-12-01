import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserListResolver implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.userService.loadUsers();
  }

}
