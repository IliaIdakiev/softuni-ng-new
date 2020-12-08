import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // implements OnInit {

  // @ViewChild(RouterOutlet) outlet: RouterOutlet;

  // constructor(router: Router) {
  //   router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
  //     const c = this.outlet.component;
  //   });
  // }

  isReady$ = this.authService.isReady$;
  // @ViewChild('filter', { static: true }) searchInput: ElementRef;

  // users$: Observable<any[]>;

  // apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private authService: AuthService, private http: HttpClient) {

  }

  // ngOnInit(): void {
  //   this.users$ =
  //     fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup').pipe(
  //       map(e => (e.target as HTMLInputElement).value),
  //       debounceTime(300),
  //       startWith(''),
  //       distinctUntilChanged(),
  //       switchMap((inputValue: string) => {
  //         let url = this.apiURL;
  //         if (inputValue) { url += `?name_like=${inputValue}`; }
  //         return this.http.get<any[]>(url);
  //       })
  //     );
  // }
}
