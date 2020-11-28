import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  hideNavigation = false;


  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/user/login']));
  }

  ngOnDestroy(): void {
  }
}
