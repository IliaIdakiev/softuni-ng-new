import { _ParseAST } from '@angular/compiler';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  isAlive$ = new Subject();
  users = [];

  counter = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute.snapshot.data);
    interval(2000)
      .pipe(takeUntil(this.isAlive$))
      .subscribe(() => {
        this.counter++;

        if (this.counter % 2 === 0) {
          this.users = this.users.concat({
            name: `Test ${this.counter}`,
            age: 10 * this.counter
          });
        }
      });

  }



  // calculateAvgAge(users: any[]): number {

  // }

  ngOnDestroy(): void {
    this.isAlive$.next();
    this.isAlive$.complete();

    // this.intervalSubscription.unsubscribe();
  }

}
