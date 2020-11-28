import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { asyncScheduler, Subscription } from 'rxjs';
import { buffer, bufferTime, debounceTime, filter, map, observeOn, throttleTime } from 'rxjs/operators';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  hideNavigation = false;
  subscription: Subscription;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(
    title: Title,
    public userService: UserService,
    router: Router
  ) {

    router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      buffer(router.events.pipe(filter(e => e instanceof NavigationEnd), debounceTime(0))),
      map((events: ActivationEnd[]) => events.reduce((acc, curr) => ({ ...acc, ...curr.snapshot.data }), {}))
    ).subscribe(console.log);

    // this.subscription = router.events.pipe(
    //   filter(e => e instanceof ActivationEnd),
    //   throttleTime(0),
    //   map((e: ActivationEnd) => e.snapshot.data)
    // ).subscribe(data => {
    //   console.log(data);
    //   title.setTitle(data?.title);
    //   this.hideNavigation = !!data?.noNavigation;
    // });



    // router.events.pipe(
    //   filter(e => e instanceof ActivationEnd),
    // ).subscribe(console.log);
  }

  logoutHandler(): void {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    // in this case this is not needed because this is a main component
    // so it will be destroyed when the application is removed (when we leave the app)
    // but it's good practice to always unsubscribe to subscriptions
    this.subscription.unsubscribe();
  }
}
