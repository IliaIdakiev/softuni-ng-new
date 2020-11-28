import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const c = this.outlet.component;
    });
  }
}
