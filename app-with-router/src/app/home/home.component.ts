import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  counter = 0;

  intervalSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot.data);
    this.intervalSubscription = interval(1000)
      .subscribe(() => { this.counter++; });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
